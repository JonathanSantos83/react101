import _ from 'lodash';
import {
    FETCH_TASK,
    FETCH_TASKS,
    CREATE_TASK,
    EDIT_TASK,
    DELETE_TASK
}   from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_TASKS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_TASK:
            console.log(action.payload.tasks.id)
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TASK:
            return _.omit(state, action.payload);            
        default:
            return state;
    }
}