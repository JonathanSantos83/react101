import tasks from '../apis/tasks';
import { 
    CREATE_TASK,
    FETCH_TASKS,
    FETCH_TASK,
    DELETE_TASK,
    EDIT_TASK
} from './types';


export const fetchTasks = () => async dispatch => {
    const response = await tasks.get('/tasks');

    dispatch({ type: FETCH_TASKS, payload: response.data.tasks });
}

export const createTask = (task) => async dispatch => {
    const response = await tasks.post('/tasks', task );

    dispatch ({ type: CREATE_TASK, payload: response.data });
};

export const deleteTask = (id) => async dispatch => {
    await tasks.delete(`/tasks/${id}`);

    dispatch({ type: DELETE_TASK, payload: id });

}

