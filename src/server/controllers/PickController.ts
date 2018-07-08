import PlayerStore from "../dataStores/PlayerStore";
import {DRAFT, END, PICK_SUCCESS, SECOND_ROUND_START, THIRD_ROUND_START} from "../../common/constants/SocketMessage";
import GameProgressStore from "../dataStores/GameProgressStore";
import {GAME_PROGRESS} from "../../common/constants/Enums";
import PickedUserCountStore from "../dataStores/PickedUserCountStore";
import RotationCountStore from "../dataStores/RotationCountStore";
import {convertPlayers2PlayerIO2, ServerDto} from "../dtos/index";

class PickController {
  pick(pickData: ServerDto, io): void {
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
        io.sockets.emit(DRAFT, {
          players: convertPlayers2PlayerIO2(PlayerStore.getCache())
        });
      }

      // 2巡目の場合は、逆順にカードを順次渡していく
      if (GameProgressStore.isCounterClockWise()) {
        PlayerStore.draft(false);
        io.sockets.emit(DRAFT, {
          players: convertPlayers2PlayerIO2(PlayerStore.getCache())
        });
      }
    }

    // FIRST_ROUNDで、全員がピック完了し、21巡したら、SECOND_ROUNDを開始する
    if (GameProgressStore.getCache() === GAME_PROGRESS.FIRST_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.startSecondRound();
      GameProgressStore.startSecondRound();
      PlayerStore.startSecondRound();
      io.sockets.emit(SECOND_ROUND_START, {
        players: convertPlayers2PlayerIO2(PlayerStore.getCache())
      });
    }

    // SECOND_ROUNDで、全員がピック完了し、21巡したら、THIRD_ROUNDを開始する
    if (GameProgressStore.getCache() === GAME_PROGRESS.SECOND_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.startThirdRound();
      GameProgressStore.startThirdRound();
      PlayerStore.startThirdRound();
      io.sockets.emit(THIRD_ROUND_START, {
        players: convertPlayers2PlayerIO2(PlayerStore.getCache())
      });
    }

    // THIRD_ROUNDで、全員がピック完了し、21巡したら、ピック終了となる
    if (GameProgressStore.getCache() === GAME_PROGRESS.THIRD_ROUND && RotationCountStore.isMaxRotatoin()) {
      RotationCountStore.end();
      GameProgressStore.end();
      io.sockets.emit(END, {
        players: convertPlayers2PlayerIO2(PlayerStore.getCache())
      });
    }
  }
}

export default new PickController();