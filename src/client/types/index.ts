import {CardIO, PlayerIO, SocketIO} from "../../common/types/index";

export interface ClientDto {
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
  handCardList: CardDto[]
}

export interface CardDto {
  name: string,
  cardID: string,
  cardURL: string,
  cardType: number
}

export const convertFromSocketIO: (s:SocketIO) => ClientDto = data => ({
  player: isUndefined(data.player) ? undefined : convertPlayerIO2PlayerDto(data.player),
  players: isUndefined(data.players) ? undefined : data.players.map(p => convertPlayerIO2PlayerDto(p)),
  playerID: isUndefined(data.playerID) ? undefined : data.playerID,
  card: isUndefined(data.card) ? undefined : convertCardIO2CardDto(data.card),
  text: isUndefined(data.text) ? undefined : data.text,
  randomID: isUndefined(data.randomID) ? undefined : data.randomID
});

export const convertPlayerIO2PlayerDto: (p: PlayerIO) => PlayerDto = data => ({
  playerID: data.playerID,
  playerName: data.playerName,
  draftDeckList: data.draftDeckList.map(d => convertCardIO2CardDto(d)),
  handCardList: data.handCardList.map(h => convertCardIO2CardDto(h))
});

export const convertCardIO2CardDto: (c: CardIO) => CardDto = data => ({
  name: data.name,
  cardID: data.cardID,
  cardURL: data.cardURL,
  cardType: data.cardType
});

const isUndefined:(d:any) => boolean = data => data === undefined;