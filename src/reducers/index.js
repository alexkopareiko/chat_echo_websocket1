import {combineReducers} from 'redux';
import connectReducer from './connectReducer';

const allReducers = combineReducers ({
  connectTest: connectReducer
});

export default allReducers
