import PlayerStore from "../dataStores/PlayerStore";
import Player from "../models/Player";
import RareCardStore from "../dataStores/RareCardStore";
import GameProgressStore from "../dataStores/GameProgressStore";
import MonsterCardStore from "../dataStores/MonsterCardStore";
import MagicCardStore from "../dataStores/MagicCardStore";
import TrapCardStore from "../dataStores/TrapCardStore";
import {FIRST_ROUND_START, LOGIN_FAILURE, LOGIN_SUCCESS} from "../../common/constants/SocketMessage";
import ExtraCardStore from "../dataStores/ExtraCardStore";
import {convertPlayer2PlayerIO, convertPlayers2PlayerIO2} from "../dtos/index";
import {ServerDto} from "../dtos";
import {PLAYER_MAX_NUMBER} from "../serverApplicationConstants";

class LoginController {
  login(data:ServerDto, io): void {
    // TODO: 引数がダサいので直したい
    const player: Player = Player.create({
      playerID: PlayerStore.getCache().length,
      playerName: data.text,
      draftDeckList: [],
      handCardList: {handCard: []}
    });
    // PLAYER_MAX_NUMBERがプレイ中に他の人が画面を開いてログインすると、playerCacheが増えておかしいことになるので受け付けない対応
    if (player.playerID < PLAYER_MAX_NUMBER) {
      PlayerStore.create(player);
      io.sockets.emit(LOGIN_SUCCESS, {
        player: convertPlayer2PlayerIO(player),
        players: convertPlayers2PlayerIO2(PlayerStore.getCache()),
        randomID: data.randomID,
        playerID: player.playerID
      });
    } else {
      io.sockets.emit(LOGIN_FAILURE, {});
    }

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
      io.sockets.emit(FIRST_ROUND_START, {
        players: convertPlayers2PlayerIO2(PlayerStore.getCache())
      });
    }
  }
}

export default new LoginController();