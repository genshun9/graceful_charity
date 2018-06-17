export default class User {
  readonly userName: string;
  readonly draftCardList: number[];

  constructor(props: { userName: string, draftCardList: number[] }) {
    this.userName = props.userName;
    this.draftCardList = props.draftCardList;
  }
}