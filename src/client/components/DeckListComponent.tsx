import * as React from "react";
import SimpleCardComponent from "./SimpleCardComponent";
import {DeckListProps} from "../containers/DeckListContainer";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

const DeckListComponent: React.SFC<DeckListProps> = props => {
  // サンプルをコピー
  const execCopy = () => {
    let deckListString:string = "";
    props.me.draftDeckList.forEach(d => {
      deckListString = deckListString + d.name + "\n";
    });

    let temp = document.createElement('div');
    temp.appendChild(document.createElement('pre')).textContent = deckListString;

    let s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);

    let result = document.execCommand('copy');
    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
  };

  const copyButton = (
    <span style={{paddingLeft: 20, paddingRight: 20}}>
      <Button type="submit" onClick={() => execCopy()}>クリップボードにコピー</Button>
    </span>
  );

  const pickListPopover = (
    <Popover id="popover-trigger-click-root-close" title="ピック順に表示">
      {props.me.draftDeckList.map((d, i) => (
        <div key={`pick-${i}`}>{d.name}</div>
      ))}
    </Popover>
  );

  const showPickListButton = (
    <span style={{paddingLeft: 20}}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={pickListPopover}>
        <Button>ピックリスト</Button>
      </OverlayTrigger>
    </span>
  );

  return (
    <div>
      <br/>
      <span style={{paddingLeft: 20, fontSize: 20, fontWeight: 600}}>
        ピック終了です！デッキレシピをコピーしてください！
      </span>
      <br/>
      {copyButton}
      {showPickListButton}
      {props.me.draftDeckList.map((c, i) => (
          <span key={`card-${i}`} style={{paddingLeft: 20}}>
              {i % 10 === 0 ? <p/> : null}
            <SimpleCardComponent card={c} />
            </span>
        )
      )}
    </div>
  )
};

export default DeckListComponent