import {PICK_CARD, SELECT_CARD} from "../constants/Constants";

class PlayerActionCreator {
  constructor() {
  }

  public selectCard(cardID: string) {
    return {
      type: SELECT_CARD,
      payload: cardID
    }
  }

  public pickCard() {
    return {
      type: PICK_CARD,
      payload: {}
    }
  }
}

export default new PlayerActionCreator();