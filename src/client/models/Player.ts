export default class Player {
  readonly playerName: string;
  readonly draftCardList: number[];

  constructor(props: { playerName: string, draftCardList: number[] }) {
    this.playerName = props.playerName;
    this.draftCardList = props.draftCardList;
  }
}