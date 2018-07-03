import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";
import Player from './models/Player';
import {PORT} from "./serverApplicationConstants";
import {GAME_PROGRESS} from "../common/constants/Enums";
import {
  CONNECTION, DISCONNECT, DRAFT, END, FIRST_ROUND_START, LOGIN, LOGIN_SUCCESS, PICK,
  PICK_SUCCESS, SECOND_ROUND_START, THIRD_ROUND_START
} from "../common/constants/SocketMessage";
import PlayerStore from "./dataStores/PlayerStore";
import RareCardStore from "./dataStores/RareCardStore";
import MonsterCardStore from "./dataStores/MonsterCardStore";
import MagicCardStore from "./dataStores/MagicCardStore";
import TrapCardStore from "./dataStores/TrapCardStore";
import ExtraCardStore from "./dataStores/ExtraCardStore";
import PickedUserCountStore from "./dataStores/PickedUserCountStore";
import RotationCountStore from "./dataStores/RotationCountStore";
import GameProgressStore from "./dataStores/GameProgressStore";

/**
 * express設定
 * post処理に、req.bodyがunderfindになるので、body-parserを利用
 * まず最初に、index.htmlを返却する
 * そのindex.html内で/distへのgetリクエストが走るので、parcelで出力した_index.htmlを返却する
 */
const app = express();
app.use(express.static('./'));
app.get('/dist', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../dist/_index.html"));
});
app.use(bodyParser.urlencoded({extended: true}));

/**
 * デバッグ用キャッシュ確認エンドポイント
 */
app.get('/cache', (_, res) => {
  const cache = {
    PlayerStore: PlayerStore.getCache(),
    RareCardStore: RareCardStore.getCache(),
    MonsterCardStore: MonsterCardStore.getCache(),
    MagicCardStore: MagicCardStore.getCache(),
    TrapCardStore: TrapCardStore.getCache(),
    ExtraCardStore: ExtraCardStore.getCache(),
    PickedUserCountStore: PickedUserCountStore.getCache(),
    RotationCountStore: RotationCountStore.getCache(),
    GameProgressStore: GameProgressStore.getCache()
  };

  res.send(JSON.stringify(cache));
});

/**
 * httpサーバ設定
 * 上記のexpress設定をhttpサーバに付与する
 * ポート8000を開き、webSocketをlistenする
 */
const server = http.createServer(app);
const io = socketIo.listen(server);
server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

/**
 * サーバ起動時にキャッシュデータを初期化
 */
PlayerStore.init();
RareCardStore.init();
MonsterCardStore.init();
MagicCardStore.init();
TrapCardStore.init();
ExtraCardStore.init();
PickedUserCountStore.init();
RotationCountStore.init();
GameProgressStore.init();

/**
 * socket.io設定
 */
io.sockets.on(CONNECTION, (socket) => {
  // ログイン
  socket.on(LOGIN, (data: { text: string, randomID: string }) => {
    const player: Player = Player.create({
      playerID: PlayerStore.getCache().length,
      playerName: data.text,
      draftDeckList: [],
      handCardList: []
    });
    PlayerStore.create(player);
    io.sockets.emit(LOGIN_SUCCESS,
        {value: {player, players: PlayerStore.getCache(), randomID: data.randomID}, playerID: player.playerID});

    // プレイヤー数が6人になったら、ドラフト開始する
    if (PlayerStore.isMaxPlayer()) {
      // レアカードのランダマイズ
      RareCardStore.randomize();
      MonsterCardStore.randomize();
      MagicCardStore.randomize();
      TrapCardStore.randomize();
      ExtraCardStore.randomize();
      // 第1ラウンド開始
      PlayerStore.startFirstRound();
      GameProgressStore.startFirstRound();
      io.sockets.emit(FIRST_ROUND_START, {value: PlayerStore.getCache()});
    }
  });

  // ピック
  // TODO: 一旦cardTypeはnullにする
  socket.on(PICK, (pickData: { playerID: number, card: { name: string, cardID: string, cardURL: string } }) => {
    PlayerStore.pick(pickData);
    PickedUserCountStore.pick();
    io.sockets.emit(PICK_SUCCESS, {playerID: pickData.playerID});

    // 全員がピック完了したら、ドラフトをする
    if (PickedUserCountStore.isAllPlayerPick() && !RotationCountStore.isMaxRotatoin()) {
      PickedUserCountStore.draft();
      RotationCountStore.draft();

      // 1巡目と3巡目の場合は、インクリメントしたIDのプレイヤーへカードを順次渡していく
      if (GameProgressStore.isClockWise()) {
        PlayerStore.draft(true);
        io.sockets.emit(DRAFT, {value: PlayerStore.getCache()});
      }

      // 2巡目の場合は、逆順にカードを順次渡していく
      if (GameProgressStore.isCounterClockWise()) {
        PlayerStore.draft(false);
        io.sockets.emit(DRAFT, {value: PlayerStore.getCache()});
      }
    }

    // FIRST_ROUNDで、全員がピック完了し、21巡したら、SECOND_ROUNDを開始する
    if (GameProgressStore.getCache() === GAME_PROGRESS.FIRST_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.startSecondRound();
      GameProgressStore.startSecondRound();
      PlayerStore.startSecondRound();
      io.sockets.emit(SECOND_ROUND_START, {value: PlayerStore.getCache()});
    }

    // SECOND_ROUNDで、全員がピック完了し、21巡したら、THIRD_ROUNDを開始する
    if (GameProgressStore.getCache() === GAME_PROGRESS.SECOND_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.startThirdRound();
      GameProgressStore.startThirdRound();
      PlayerStore.startThirdRound();
      io.sockets.emit(THIRD_ROUND_START, {value: PlayerStore.getCache()});
    }

    // THIRD_ROUNDで、全員がピック完了し、21巡したら、ピック終了となる
    if (GameProgressStore.getCache() === GAME_PROGRESS.THIRD_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.end();
      GameProgressStore.end();
      io.sockets.emit(END, {value: PlayerStore.getCache()});
    }
  });

  // 接続終了イベント
  socket.on(DISCONNECT, () => {
    console.log("disconnect");
    io.sockets.emit("publish", {});
  });
});

/**
 * 0から引数-1までの整数が、ランダムに格納された配列を返却するメソッド
 */
export const getRandomArray: (a: number) => number[] = (maxNumber: number) => {
  //生成した乱数を格納する配列を初期化
  let arr: number[] = [];
  //生成した乱数を格納している配列の長さ（生成した乱数の数）
  let arrLength: number = arr.length;
  //パラメータ maxNumber の数だけ Math.random()で乱数を発生
  for (let i = 0; i < maxNumber; i++) {
    let candidate = Math.floor(Math.random() * maxNumber);
    //今まで生成された乱数と同じ場合は再度乱数を発生
    for (let j = 0; j < arrLength; j++) {
      if (candidate === arr[j]) {
        candidate = Math.floor(Math.random() * maxNumber);
        j = -1;
      }
    }
    arr[i] = candidate;
    arrLength++;
  }
  return arr;
};

/**
 * 順序を変更したい配列と、変更したい順序(index)の配列を渡すと、配列の並びが変わるメソッド
 */
export const changeOrderArray: (a: any[], b: number[]) => any[] = (dataArray: any[], orderArray: number[]) => {
  let resultArray = [];
  orderArray.forEach(i => resultArray.push(dataArray[i]));
  return resultArray;
};