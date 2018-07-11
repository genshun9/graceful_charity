import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {save, load} from "redux-localstorage-simple"
import reducers from './reducers';

export const Store = compose(
  applyMiddleware(save({namespace: "graceful_charity"}), thunkMiddleware)
)(createStore)(reducers, load());