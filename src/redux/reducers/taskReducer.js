import * as types from "../actions/actionTypes";

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_TASK:
            return [...state, {...action.tasks}];
        default:
            return state;
    }
}
