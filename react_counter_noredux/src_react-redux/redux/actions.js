//包含所有的action creator
import {INCREMENT,DECREMENT} from './action-types'
//增加
export const incrementCreator = (number)=>({type:INCREMENT,data:number});
export const decrementCreator = (number)=>({type:DECREMENT,data:number});