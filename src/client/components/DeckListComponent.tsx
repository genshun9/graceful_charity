import * as React from "react";
import SimpleCardComponent from "./SimpleCardComponent";
import {DeckListProps} from "../containers/DeckListContainer";

const DeckListComponent: React.SFC<DeckListProps> = props => {
  // サンプルをコピー
  const execCopy = (string) => {
    var temp = document.createElement('div');

    temp.appendChild(document.createElement('pre')).textContent = string;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);

    var result = document.execCommand('copy');

    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
  };
  return (
    <div>
      <button onClick={() => execCopy("文字列")}>デッキリストをコピー</button>
      {props.me.draftDeckList.map((c, i) => (
          <span key={`card-${i}`}>
              {i % 10 === 0 ? <p/> : null}
            <SimpleCardComponent card={c} />
            </span>
        )
      )}
    </div>
  )
};

export default DeckListComponent