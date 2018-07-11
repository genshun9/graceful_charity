import Card from "../models/Card";
import {ActionPayload, PICK_CARD, SELECT_CARD} from "../constants/ActionConstants";

class PlayerActionCreator {
  constructor() {
  }

  public selectCard(cardID: string):ActionPayload {
    return {
      type: SELECT_CARD,
      payload: cardID
    }
  }

  public pickCard(card: Card):ActionPayload {
    return {
      type: PICK_CARD,
      payload: {value: card}
    }
  }
}

export default new PlayerActionCreator();