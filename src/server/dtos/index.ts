import {CardIO, PlayerIO, SocketIO} from "../../common/types";
import Player from "../models/Player";
import Card from "../models/Card";
import * as _ from "lodash";

export interface ServerDto {
  player?: PlayerDto,
  players?: PlayerDto[],
  playerID?: number,
  card?: CardDto,
  text?: string,
  randomID?: string
}

export interface PlayerDto {
  playerID: number,
  playerName: string,
  draftDeckList: CardDto[],
  handCardList: HandCardDto
}

export interface CardDto {
  name: string,
  cardID: string,
  cardURL: string,
  cardType: number
}

export interface HandCardDto {
  handCard: CardDto[]
}

// clientに送信する際のconverter
export const convertPlayer2PlayerIO:(player: Player) => PlayerIO = (player:Player) => {
  return {
    playerID: player.playerID,
    playerName: player.playerName,
    draftDeckList: player.draftDeckList.map(d => convertCard2CordIO(d)),
    handCardList: player.handCardList.handCard.map(h => convertCard2CordIO(h))
  }
};

export const convertPlayers2PlayerIO2:(players: Player[]) => PlayerIO[]
  = (players) => players.map(p => convertPlayer2PlayerIO(p));

export const convertCard2CordIO: (card: Card) => CardIO = card => ({
  name: card.name,
  cardID: card.cardID,
  cardURL: card.cardURL,
  cardType: card.cardType
});

// clientから受信した際のconverter
export const convertFromSocketIO: (data: SocketIO) => ServerDto = data => ({
  player: _.isUndefined(data.player) ? undefined : convertPlayerIO2PlayerDto(data.player),
  players: _.isUndefined(data.players) ? undefined : data.players.map(p => convertPlayerIO2PlayerDto(p)),
  playerID: _.isUndefined(data.playerID) ? undefined : data.playerID,
  card: _.isUndefined(data.card) ? undefined : convertCardIO2CardDto(data.card),
  text: _.isUndefined(data.text) ? undefined : data.text,
  randomID: _.isUndefined(data.randomID) ? undefined : data.randomID
});

export const convertPlayerIO2PlayerDto: (p: PlayerIO) => PlayerDto = data => ({
  playerID: data.playerID,
  playerName: data.playerName,
  draftDeckList: data.draftDeckList.map(d => convertCardIO2CardDto(d)),
  handCardList: convert2HandCardDto(data.handCardList)
});

export const convertCardIO2CardDto: (c: CardIO) => CardDto = data => ({
  name: data.name,
  cardID: data.cardID,
  cardURL: data.cardURL,
  cardType: data.cardType
});

export const convert2HandCardDto: (c: CardIO[]) =>  HandCardDto = data => ({
  handCard: _.isUndefined(data) ? [] : data.map(d => convertCardIO2CardDto(d))
});