import PlayerStore from "../dataStores/PlayerStore";
import Player from "../models/Player";
import RareCardStore from "../dataStores/RareCardStore";
import GameProgressStore from "../dataStores/GameProgressStore";
import MonsterCardStore from "../dataStores/MonsterCardStore";
import MagicCardStore from "../dataStores/MagicCardStore";
import TrapCardStore from "../dataStores/TrapCardStore";
import {FIRST_ROUND_START, LOGIN_SUCCESS} from "../../common/constants/SocketMessage";
import ExtraCardStore from "../dataStores/ExtraCardStore";

class LoginController {
  login(data: { text: string, randomID: string }, io): void {
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
  }
}

export default new LoginController();