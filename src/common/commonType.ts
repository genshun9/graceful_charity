// socket通信上でやり取りするオブジェクトは生JSになるので、その型をtype aliasとして定義してみる
// TODO: handCardListの型をきちんと定義し、IOを各modelのcreateメソッドの引数の型に定義してみる
export type SocketIO = {player?: any, players?: any[], playerID?: string, randomID?: string};
export type PlayerIO = {playerID: number, playerName: string, draftDeckList: CardIO[], handCardList: CardIO[]};
export type CardIO = { name: string, cardID: string, cardURL: string, cardType: number };