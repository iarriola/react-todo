import * as types from './actionTypes';

export function createTask(task) {
    return {type: types.CREATE_TASK, task};
}

export function get(id) {
    return {type: types.GET_TASK, id};
}

export function getAll() {
    return {type: types.GET_ALL_TASKS};
}

export function remove(id) {
    return {type: types.DELETE_TASK, id};
}
