import {CardIO, PlayerIO, SocketIO} from "../../common/types";
import Player from "../models/Player";
import Card from "../models/Card";

// clientに送信する際のconverter
export const convertPlayer2PlayerIO:(player: Player) => PlayerIO = (player:Player) => {
  return {
    playerID: player.playerID,
    playerName: player.playerName,
    draftDeckList: player.draftDeckList.map(d => convertCard2CordIO(d)),
    handCardList: player.handCardList.handCard.map(h => convertCard2CordIO(h))
  }
};

// clientに送信する際のconverter
export const convertCard2CordIO: (card: Card) => CardIO = card => ({
  name: card.name,
  cardID: card.cardID,
  cardURL: card.cardURL,
  cardType: card.cardType
});

// clientから受信した際のconverter
export const convertSoketIO2Login: (data: SocketIO) => {} = data => ({
  text: data.text,
  randomID: data.randomID
});

// clientから受信した際のconverter
export const convertSocketIO2Pick: (data: SocketIO) => {} = data => ({
  playerID: data.playerID,
  card: {
    name: data.card.name,
    cardID: data.card.cardID,
    cardURL: data.card.cardURL,
    cardType: data.card.cardType
  }
});