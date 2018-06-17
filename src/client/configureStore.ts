import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export const Store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);