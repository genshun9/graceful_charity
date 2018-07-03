import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as path from "path";
import {PORT} from "./serverApplicationConstants";
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
  socket.on(LOGIN, (data: { text: string, randomID: string }) => LoginController.login(data, io));

  // ピック
  // TODO: 一旦cardTypeはnullにする
  socket.on(PICK, (pickData: { playerID: number, card: { name: string, cardID: string, cardURL: string } }) => PickController.pick(pickData, io));

  // 接続終了イベント
  socket.on(DISCONNECT, () => console.log("disconnect"));
});