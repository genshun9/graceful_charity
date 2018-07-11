export default abstract class AbstractPlayer {
  readonly playerID: number;
  readonly playerName: string;

  constructor(props: { playerID: number, playerName: string }) {
    this.playerID = props.playerID;
    this.playerName = props.playerName;
  }

  static create(props: { playerID: number, playerName: string }) {
  }
}