import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import message_detail from "./message-detail";
import MyNavLink from "../components/MyNavLink";


export  default class Masg extends Component{
    state = {
        messages:[
            /*{id:1,title:'message001',},
            {id:2,title:'message002',},
            {id:3,title:'message003',}*/
        ]
    };
    componentDidMount() {
        //模拟ajax请求异步获取数据
        window.setTimeout(()=>{
            const messages = [
                {id:1,title:'message001',},
                {id:2,title:'message002',},
                {id:3,title:'message003',}
            ]
            this.setState({messages})
        },1000)
    }

    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((mes,index)=>(
                            <li key={index}>
                                <MyNavLink to={`/home/masg/messagedetail/${mes.id}`}>{mes.title}</MyNavLink>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Switch>
                        <Route  path='/home/masg/messagedetail/:id' component={message_detail}/>
                    </Switch>

                </div>
            </div>


         )
    }
}