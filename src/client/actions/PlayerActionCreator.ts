import {PICK_CARD, SELECT_CARD} from "../constants/Constants";
import Card from "../models/Card";

class PlayerActionCreator {
  constructor() {
  }

  public selectCard(cardID: string) {
    return {
      type: SELECT_CARD,
      payload: cardID
    }
  }

  public pickCard(card: Card) {
    return {
      type: PICK_CARD,
      payload: {value: card}
    }
  }
}

export default new PlayerActionCreator();