import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";
import Player from './models/Player';
import Card from "./models/Card"
import {
  PORT, PLAYER_MAX_NUMBER, rareCardList, monsterCardList, magicCardList, trapCardList,
  extraCardList, ROTATION_MAX_NUMBER, ROUND
} from "./constants";
import HandCardList from "./models/HandCard";

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
    playerCache,
    rareCardCache,
    monsterCardCache,
    magicCardCache,
    trapCardCache,
    extraCardCache,
    pickedUserCount,
    rotationCount,
    round
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
 * キャッシュデータをまとめる
 */
var playerCache: Player[] = [];
var rareCardCache: Card[] = rareCardList.map(c => Card.create(c));
var monsterCardCache: Card[] = monsterCardList.map(c => Card.create(c));
var magicCardCache: Card[] = magicCardList.map(c => Card.create(c));
var trapCardCache: Card[] = trapCardList.map(c => Card.create(c));
var extraCardCache: Card[] = extraCardList.map(c => Card.create(c));
var pickedUserCount: number = 0;
var rotationCount: number = 0;
var round: number = ROUND.NO_START;

/**
 * socket.io設定
 */
io.sockets.on('connection', (socket) => {
  // ログイン
  socket.on('LOGIN', (data:{text: string, randomID: string}) => {
    const player: Player = Player.create({
      playerID: playerCache.length, //socket.id,
      playerName: data.text,
      draftDeckList: [],
      handCardList: []
    });
    playerCache.push(player);
    io.sockets.emit('LOGIN_SUCCESS',
        {value: {player, players: playerCache, randomID: data.randomID}, playerID: player.playerID});

    // プレイヤー数が6人になったら、ドラフト開始する
    if (playerCache.length === PLAYER_MAX_NUMBER) {
      // レアカードのランダマイズ
      const randomOrderForRareCard = getRandomArray(rareCardCache.length);
      rareCardCache = changeOrderArray(rareCardCache, randomOrderForRareCard);
      // モンスターカードのランダマイズ
      const randomOrderForMonsterCard = getRandomArray(monsterCardCache.length);
      monsterCardCache = changeOrderArray(monsterCardCache, randomOrderForMonsterCard);
      // 魔法カードのランダマイズ
      const randomOrderForMagicCard = getRandomArray(magicCardCache.length);
      magicCardCache = changeOrderArray(magicCardCache, randomOrderForMagicCard);
      // 罠カードのランダマイズ
      const randomOrderForTrapCard = getRandomArray(trapCardCache.length);
      trapCardCache = changeOrderArray(trapCardCache, randomOrderForTrapCard);
      // Exカードのランダマイズ
      const randomOrderForExtraCard = getRandomArray(extraCardCache.length);
      extraCardCache = changeOrderArray(extraCardCache, randomOrderForExtraCard);

      // 各プレイヤーのhandCardListに、カードを渡す(draftメソッド使う)
      playerCache.forEach(p => {
        let handCardList: Card[] = [];
        // レアカード2枚
        handCardList.push(rareCardCache[p.playerID]);
        handCardList.push(rareCardCache[p.playerID + PLAYER_MAX_NUMBER]);
        // モンスター10枚
        handCardList.push(monsterCardCache[p.playerID]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 3]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 4]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 5]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 6]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 7]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 8]);
        handCardList.push(monsterCardCache[p.playerID + PLAYER_MAX_NUMBER * 9]);
        // 魔法3枚
        handCardList.push(magicCardCache[p.playerID]);
        handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER]);
        handCardList.push(magicCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
        // 罠3枚
        handCardList.push(trapCardCache[p.playerID]);
        handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER]);
        handCardList.push(trapCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
        // Ex3枚
        handCardList.push(extraCardCache[p.playerID]);
        handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER]);
        handCardList.push(extraCardCache[p.playerID + PLAYER_MAX_NUMBER * 2]);
        p.draft(HandCardList.create(handCardList));
      });
      round = ROUND.FIRST;
      io.sockets.emit('FIRST_ROUND_START', {value: playerCache});
    }
  });

  // ピック
  socket.on('PICK', (pickData: { playerID: number, card: {name: string, cardID: string, cardURL: string }}) => {
    playerCache.find(p => p.playerID === pickData.playerID)
      .pick({name: pickData.card.name, cardID: pickData.card.cardID, cardURL: pickData.card.cardURL});
    pickedUserCount++;
    io.sockets.emit('PICK_SUCCESS', {playerID: pickData.playerID});

    // 全員がピック完了したら、ドラフトをする
    if (pickedUserCount === PLAYER_MAX_NUMBER && rotationCount !== ROTATION_MAX_NUMBER) {
      pickedUserCount = 0;
      rotationCount++;

      // 1巡目と3巡目の場合は、インクリメントしたIDのプレイヤーへカードを順次渡していく
      if (round === ROUND.FIRST || round === ROUND.THIRD) {
        const newHandCardList: HandCardList[] = playerCache.map(p => p.handCardList);
        playerCache.forEach((p,i) => {
          if (i  === 0) {
            p.draft(newHandCardList[PLAYER_MAX_NUMBER - 1])
          } else {
            p.draft(newHandCardList[p.playerID - 1])
          }
        });
        io.sockets.emit('DRAFT', {value: playerCache});
      }

      // 2巡目の場合は、逆順にカードを順次渡していく
      if (round === ROUND.SECOND) {
        const newHandCardList: HandCardList[] = playerCache.map(p => p.handCardList);
        playerCache.forEach((p,i) => {
          if (i  === PLAYER_MAX_NUMBER - 1) {
            p.draft(newHandCardList[0])
          } else {
            p.draft(newHandCardList[p.playerID + 1])
          }
        });
        io.sockets.emit('DRAFT', {value: playerCache});
      }
    }

    // FIRST_ROUNDで、全員がピック完了し、21巡したら、SECOND_ROUNDを開始する
    if (round === ROUND.FIRST && pickedUserCount === PLAYER_MAX_NUMBER && rotationCount === ROTATION_MAX_NUMBER) {
      pickedUserCount = 0;
      rotationCount = 0;
      round = ROUND.SECOND;
      // TODO 21枚をhandCardListにセットする
      io.sockets.emit('SECOND_ROUND_START', {value: playerCache});
    }

    // SECOND_ROUNDで、全員がピック完了し、21巡したら、THIRD_ROUNDを開始する
    if (round === ROUND.SECOND && pickedUserCount === PLAYER_MAX_NUMBER && rotationCount === ROTATION_MAX_NUMBER) {
      pickedUserCount = 0;
      rotationCount = 0;
      round = ROUND.SECOND;
      // TODO 21枚をhandCardListにセットする
      io.sockets.emit('THIRD_ROUND_START', {value: playerCache});

    }

    // THIRD_ROUNDで、全員がピック完了し、21巡したら、ピック終了となる
    if (round === ROUND.THIRD && pickedUserCount === PLAYER_MAX_NUMBER && rotationCount === ROTATION_MAX_NUMBER) {
      pickedUserCount = 0;
      rotationCount = 0;
      round = ROUND.END;
      io.sockets.emit('END', {value: playerCache});
    }
  });

  // 接続終了イベント
  socket.on('disconnect', () => {
    console.log("disconnect");
    io.sockets.emit("publish", {});
  });
});

/**
 * 0から引数-1までの整数が、ランダムに格納された配列を返却するメソッド
 */
const getRandomArray: (a: number) => number[] = (maxNumber:number) => {
  //生成した乱数を格納する配列を初期化
  let arr:number[] = [];
  //生成した乱数を格納している配列の長さ（生成した乱数の数）
  let arrLength:number = arr.length;
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
const changeOrderArray: (a: any[], b:number[]) => any[] = (dataArray:any[], orderArray:number[]) => {
  let resultArray = [];
  orderArray.forEach(i => resultArray.push(dataArray[i]));
  return resultArray;
};