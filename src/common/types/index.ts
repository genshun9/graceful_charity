// socket通信上では生JSになるので、その型をtype aliasとして定義し、client/server側でdtoに変換してmodelをcreateする作りにしてみる。
export interface SocketIO {
  player?: PlayerIO,
  players?: PlayerIO[],
  playerID?: number,
  card?: CardIO,
  text?: string,
  randomID?: string
}

export interface PlayerIO {
  playerID: number,
  playerName: string,
  draftDeckList: CardIO[],
  handCardList: CardIO[]
}

export interface CardIO {
  name: string,
  cardID: string,
  cardURL: string,
  cardType: number
}