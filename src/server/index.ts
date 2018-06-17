import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';

/**
 * express設定
 * post処理に、req.bodyがunderfindになるので、body-parserを利用
 * elm-app build でbuild先にbundle.jsを出力するのでそちらを参照する
 * ポート8000を指定し、リクエスト待機状態にする
 */
const app = express();
app.use(express.static('./build'));
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

/**
 * httpサーバ設定し、express設定を付与
 * webSocketの機能を、httpサーバに付与
 */
const server = http.createServer(app);
const io = socketIo.listen(server);

/**
 * キャッシュデータをまとめる
 */
var user = [];

/**
 * socket.io設定
 */
io.sockets.on('connection', (socket) => {
  // 接続開始
  socket.on('connected', (userName: string) => {
    console.log("here");
    user[socket.id] = {userName, id: socket.id};
    io.sockets.emit('publish', {value: socket.id});
  });

  // メッセージ送信イベント
  socket.on('publish', (data: any) => {
    console.log("publish", data);
    io.sockets.emit('publish', data);
  });

  // 接続終了イベント
  socket.on('disconnect', () => {
    console.log("disconnect");
    delete user[socket.id];
    io.sockets.emit("publish", {});
  });

  socket.on('send', (str) => {
    console.log("send", str);
  })
});