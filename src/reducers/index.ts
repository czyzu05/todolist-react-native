import { combineReducers } from 'redux';

import todoList, { ITodolistReducer } from './todolistReducer';

export default combineReducers({
    todoList
});

export interface IState {
    todoList: ITodolistReducer;
}