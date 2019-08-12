//包含所有的action creator
//同步action返回对象
//异步action返回函数
import {ADD_COMMENT,DEL_COMMENT,AYSNCADDCOMMENT} from './action-types'
//增加
export const addComments = (comment)=>({type:ADD_COMMENT,data:comment});
export const delCommentse= (index)=>({type:DEL_COMMENT,data:index});
const addCommentsAs = (comments)=>({type:AYSNCADDCOMMENT,data:comments});

//异步action

export const addCommentsAsync = ()=>{
    return dispach =>{
        //异步代码
        setTimeout(()=>{
            const initComments = [
                {username:'tom',content:'react挺好的'},
                {username:'kobe',content:'react太难了'}
            ];
            //4s之后才去分发一个增加的action
            dispach(addCommentsAs(initComments))
        },4000)
    }
};
