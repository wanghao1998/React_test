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
    /*push,replace
    *
    * */
    showDetail = (id)=>{
        this.props.history.push(`/home/masg/messagedetail/${id}`)
    };
    showDetail2 = (id)=>{
        this.props.history.replace(`/home/masg/messagedetail/${id}`)
    };
    back =()=>{
        this.props.history.goBack();
    };
    forword=()=>{
        this.props.history.goForward();
    };
    reqPage=()=>{
        //通过js进行页面跳转
       window.location = 'https://baidu.com';
    } ;
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((mes,index)=>(
                            <li key={index}>
                                <MyNavLink to={`/home/masg/messagedetail/${mes.id}`}>{mes.title}</MyNavLink>
                                {/*传递id*/}
                                &nbsp;&nbsp;<button onClick={()=>this.showDetail(mes.id)}>push()查看</button>
                                &nbsp;&nbsp;<button onClick={()=>this.showDetail2(mes.id)}>replace()查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forword}>前进</button>
                </p>
                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>
                <div>
                    <Switch>
                        <Route  path='/home/masg/messagedetail/:id' component={message_detail}/>
                    </Switch>

                </div>
            </div>


         )
    }
}