import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl'

export interface ITodolistReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodolistReducer => ({
    todoList: [{
        name: 'Pierwsza',
        description: 'Notatka'
    },
    {
        name: 'Druga',
        description: 'Notatka'
    }]
});

export default (state = defaultState(), action: any): ITodolistReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEMENT: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};