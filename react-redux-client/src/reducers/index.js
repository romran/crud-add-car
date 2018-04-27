// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {carReducer} from './carReducer';

export default combineReducers({
  appState:appReducer,
  carState:carReducer,
  routing
  // More reducers if there are
  // can go here
})
