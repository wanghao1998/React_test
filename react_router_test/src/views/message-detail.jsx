import React,{Component} from 'react'


export  default class message_detail extends Component{

    render() {
        const  allMessages = [
            {id:1,title:'message001',content:'我爱你'},
            {id:2,title:'message002',content:'我不爱你'},
            {id:3,title:'message003',content:'我喜欢你'}
        ];
        //得到请求参数中的id
        const {id} = this.props.match.params;
        //得到对应的msg
        const msg = allMessages.find((m)=>{
            //返回第一个结果为true的数组元素
            return m.id === id*1
        });
        return (
            <ul>
                <li>ID: {msg.id}</li>
                <li>TITLE: {msg.title}</li>
                <li>CONTENT: {msg.content}</li>
            </ul>

         )
    }
}