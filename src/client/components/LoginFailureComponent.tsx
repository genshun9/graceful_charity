import * as React from "react";
import {PLAYER_MAX_NUMBER} from "../constants/ClientApplicationConstants";

const LoginFailureComponent: React.SFC<{}> = props => {
  return (
    <div style={{paddingLeft: 20, fontWeight: 20}}>
      {`既に${PLAYER_MAX_NUMBER}人がログイン済みです`}
    </div>
  )
};

export default LoginFailureComponent