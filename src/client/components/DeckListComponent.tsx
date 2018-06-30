import * as React from "react";
import SimpleCardComponent from "./SimpleCardComponent";
import {DeckListProps} from "../containers/DeckListContainer";

const DeckListComponent: React.SFC<DeckListProps> = props => {
  return (
    <div>
      {props.me.handCardList.map((c, i) => (
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