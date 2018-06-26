import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {Store} from './configureStore';
import AppContainer from "./containers/AppContainer";
import "../style/main.styl";

ReactDOM.render(
  <Provider store={Store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);