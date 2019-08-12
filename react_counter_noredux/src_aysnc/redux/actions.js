//包含所有的action creator
//同步action返回对象
//异步action返回函数
import {INCREMENT,DECREMENT} from './action-types'
//增加
export const incrementCreator = (number)=>({type:INCREMENT,data:number});
export const decrementCreator = (number)=>({type:DECREMENT,data:number});

//异步action
export const incremensAsync = (number)=>{
    return dispach =>{
        //异步代码
        setTimeout(()=>{
            //1s之后才去分发一个增加的action
            dispach(incrementCreator(number))
        },2000)
    }
}
