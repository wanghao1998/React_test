// 包含n个reducers的函数
import {ADD_COMMENT,DEL_COMMENT,AYSNCADDCOMMENT} from './action-types'

const initComments = [ ];
export function comments(state=initComments,action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state];
        case DEL_COMMENT:
            return state.filter((comment,index)=>index!==action.data);
        case AYSNCADDCOMMENT:
            return action.data;
        default:
            return state;
    }
}
