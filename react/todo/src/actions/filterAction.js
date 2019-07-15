import { FILTER } from '../constans';

export const EditFilter = (val)=>{ 
    return {
        type: FILTER,
        val: val
    }
}