import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";

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
 * httpサーバ設定
 * 上記のexpress設定をhttpサーバに付与する
 * ポート8000を開き、webSocketをlistenする
 */
const server = http.createServer(app);
const io = socketIo.listen(server);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log('listening!');
});

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