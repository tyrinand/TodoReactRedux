import { FILTER } from '../constans';

const initialState = {
    filter: 'All'
}
const filter =  (state = initialState , {type, val}) =>{ // деструктуризация action
    switch (type){
        case FILTER: 
            return {
                ...state, filter: val
            }
        default: 
            return state;
    }
}


export default filter;