import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";
import {PUBLIC_IP, PORT} from "./serverApplicationConstants";
import {CONNECTION, DISCONNECT, LOGIN, PICK} from "../common/constants/SocketMessage";
import PlayerStore from "./dataStores/PlayerStore";
import RareCardStore from "./dataStores/RareCardStore";
import MonsterCardStore from "./dataStores/MonsterCardStore";
import MagicCardStore from "./dataStores/MagicCardStore";
import TrapCardStore from "./dataStores/TrapCardStore";
import ExtraCardStore from "./dataStores/ExtraCardStore";
import PickedUserCountStore from "./dataStores/PickedUserCountStore";
import RotationCountStore from "./dataStores/RotationCountStore";
import GameProgressStore from "./dataStores/GameProgressStore";
import LoginController from "./controllers/LoginController";
import PickController from "./controllers/PickController";
import {SocketIO} from "../common/types";
import {convertFromSocketIO} from "./dtos";

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
 * localStorage内のデータを消去する強制終了エンドポイント
 */
app.get('/end', (_, res) => {
  res.header("Content-Type", "text/html;charset=utf-8");
  res.write("<html><body>アプリを強制終了しました。<script>window.localStorage.clear();</script></body>");
  res.end();
});

/**
 * httpサーバ設定
 * 上記のexpress設定をhttpサーバに付与する
 * ポート8000を開き、webSocketをlistenする
 */
const server = http.createServer(app);
const io = socketIo.listen(server);
server.listen(PORT, () => {
  console.log(`サーバを起動: http://${PUBLIC_IP}:${PORT}`);
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
  socket.on(LOGIN, (data: SocketIO) => LoginController.login(convertFromSocketIO(data), io));
  socket.on(PICK, (data: SocketIO) => PickController.pick(convertFromSocketIO(data), io));
  socket.on(DISCONNECT, () => {});
});