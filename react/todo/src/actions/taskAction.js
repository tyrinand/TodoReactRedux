import { HAS_ERROR, HAS_LOADING, FETCH_DATA_SUC, ADD_TASK_SUC, DEL_TASK_SUC, EDIT_TASK, UPDATE_TASK, SELECT_TASK } from '../constans';
import MyService from '../service/MyServise.js';

const serv = new MyService(); // сервисы

const HasErrored = (bool)=>{ // задает ошибку
    return {
        type: HAS_ERROR,
        error: bool
    }
}
const HasLoading = (bool)=>{ // задает зашрузку
    return {
        type: HAS_LOADING,
        loading: bool
    }
}
const FetchDataSuccess = (tasks)=>{ // задает обновляет элементы
    return {
        type: FETCH_DATA_SUC,
        tasks: tasks
    }
}
export const tasksFetch = ()=>{
    return (dispatch) => {
        dispatch(HasLoading(true));
        serv.GetAllTasks()
        .then( (data)=>{
            const new_arr = data.map( (item) =>{
               return {...item, edit: false}
             })
             dispatch(FetchDataSuccess(new_arr)); 
             dispatch(HasLoading(false));
         })
         .catch(() => dispatch(HasErrored(true)));
    }
}
//добавление 
const AddTaskSuccess = (task)=>{ // добавляет в конец элемент
    return {
        type: ADD_TASK_SUC,
        task: task
    }
}
export const AddTaskAction = (title)=>{
    return (dispatch) => {
       dispatch(HasLoading(true));
        serv.AddTask(title)
        .then( (data)=>{
            const task = {...data, edit: false};
            dispatch(AddTaskSuccess(task)); 
            dispatch(HasLoading(false));
         })
         .catch(() => dispatch(HasErrored(true)));
    }
}
//удаление
const DelTaskSuccess = (id)=>{ // добавляет в конец элемент
    return {
        type: DEL_TASK_SUC,
        id: id
    }
}
export const DelTaskAction = (id)=>{
    return (dispatch) => {
        dispatch(DelTaskSuccess(id));
        serv.DelTask(id)
            .catch(() => dispatch(HasErrored(true)));
    }
}
export const EditTask = (id)=>{ 
    return {
        type: EDIT_TASK,
        id: id
    }
}
//обновление клиента
const UpdateTask = (id, title)=>{ 
    return {
        type: UPDATE_TASK,
        id: id,
        title: title
    }
}
//обновление на сервере
export const UpdateTaskAction = (id, title)=>{
    return (dispatch) => {
        dispatch(UpdateTask(id, title));
        serv.UpdateTask(id,title)
            .catch(() => dispatch(HasErrored(true)));
    }
}
//выбор пункта
const SelectTask = (id)=>{ 
    return {
        type: SELECT_TASK,
        id: id
    }
}
export const SelectTaskAction = (id)=>{
    return (dispatch) => {
        dispatch(SelectTask(id));
        serv.ChekedTask(id)
            .catch(() => dispatch(HasErrored(true)));
    }
}


