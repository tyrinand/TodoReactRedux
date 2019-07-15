import { combineReducers } from 'redux';
import tasks from './task';
import filter from './filter';

const rootReducer = combineReducers({ tasks, filter });

export default rootReducer;