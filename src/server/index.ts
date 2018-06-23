import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";
import Player from './models/Player';
import Card from "./models/Card";

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
  console.log(playerCache);
  console.log(allCardCache);
  console.log(pickedUserCount);
  console.log(rotationCount);
  res.sendStatus(200);
});

/**
 * httpサーバ設定
 * 上記のexpress設定をhttpサーバに付与する
 * ポート8000を開き、webSocketをlistenする
 */
const server = http.createServer(app);
const io = socketIo.listen(server);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

/**
 * キャッシュデータをまとめる
 */
var playerCache: Player[] = [];
var allCardCache: Card[] = [];
var pickedUserCount: number = 0;
var rotationCount: number = 0;

/**
 * socket.io設定
 */
io.sockets.on('connection', (socket) => {
  // ログイン
  socket.on('LOGIN', (playerName: string) => {
    const player: Player = Player.create({
      playerID: socket.id,
      playerName,
      draftDeckList: [],
      handCardList: []
    });
    playerCache.push(player);
    io.sockets.emit('LOGIN_SUCCESS', {value: player, playerID: player.playerID});

    // プレイヤー数が6人になったら、ドラフト開始する
    if (playerCache.length === 6) {
      io.sockets.emit('DRAFT', {value: playerCache});
    }
  });

  // ピック
  socket.on('PICK', (pickData: { playerID: string, cardID: string, cardURL: string }) => {
    playerCache.find(p => p.playerID === pickData.playerID)
      .pick({cardID: pickData.cardID, cardURL: pickData.cardURL});
    pickedUserCount++;
    io.sockets.emit('PICK_SUCCESS', {playerID: pickData.playerID});

    // 全員がピック完了したら、ドラフトをする（仮に、各巡12回を上限とする）
    if (pickedUserCount === 6 && rotationCount !== 12) {
      pickedUserCount = 0;
      rotationCount++;
      io.sockets.emit('DRAFT', {value: playerCache});
    }
  });

  // メッセージ送信イベント
  socket.on('publish', (data: any) => {
    console.log("publish", data);
    io.sockets.emit('publish', data);
  });

  // 接続終了イベント
  socket.on('disconnect', () => {
    console.log("disconnect");
    io.sockets.emit("publish", {});
  });

  socket.on('send', (str) => {
    console.log("send", str);
  })
});