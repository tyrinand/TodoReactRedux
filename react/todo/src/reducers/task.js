import { HAS_ERROR, HAS_LOADING, FETCH_DATA_SUC, ADD_TASK_SUC,DEL_TASK_SUC, EDIT_TASK, UPDATE_TASK, SELECT_TASK } from '../constans';

const initialState = {
    tasks: [],
    isLoading: false,
    isError: false
}
const tasks =  (state = initialState , {id, title, type, error, loading, tasks,task}) =>{ // деструктуризация action
    switch (type){
        case HAS_ERROR: // событие ошибки 
            return {
                ...state, isError: error
            }
        case HAS_LOADING: // событие загрузки
            return {
                ...state, isLoading: loading
            }
        case FETCH_DATA_SUC: // данные пришли
            return{
                ...state, tasks: tasks
            }
        case ADD_TASK_SUC:// добавление элемента
            return{
                ...state, tasks : [...state.tasks, task]
            }
        case DEL_TASK_SUC:
            return{
                ...state, tasks : state.tasks.filter(item => item.id !== id)
            }
        case EDIT_TASK:
            return{
                ...state, tasks : state.tasks.map((item)=>{
                    if(item.id === id) 
                        item.edit = !item.edit;
                    return item;
                }) 
            }
        case UPDATE_TASK:
            return{
                ...state, tasks : state.tasks.map((item)=>{
                    if(item.id === id) 
                        {
                            item.edit = false;
                            item.title = title;
                        }
                    return item;
                }) 
            }
        case SELECT_TASK:
            return{
                ...state, tasks : state.tasks.map((item)=>{
                    if(item.id === id) 
                        item.suc = !item.suc;
                    return item;
                }) 
            }
        default: 
            return state;
    }
}


export default tasks;