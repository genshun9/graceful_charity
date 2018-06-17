import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';

/**
 * express設定
 * post処理に、req.bodyがunderfindになるので、body-parserを利用
 * ポート8000を指定し、リクエスト待機状態にする
 */
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

/**
 * httpサーバ設定し、express設定を付与
 */
const server = http.createServer(app);

/**
 * webSocketの機能を、httpサーバに付与
 */
const io = socketIo.listen(server);

/**
 * socket.io設定
 */
io.sockets.on('connection', (socket) => {
  // 接続開始
  socket.on('connected', () => {
    io.sockets.emit('publish', {});
  });

  // メッセージ送信イベント
  socket.on('publish', (data) => {
    io.sockets.emit('publish', data);
  });

  // 接続終了イベント
  socket.on('disconnect', () => {
    io.sockets.emit("publish", {});
  });
});