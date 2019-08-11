import React,{Component} from 'react'
import Main from "./main";
import Search from "./search";

//使用pubsub实现组件间的消息订阅消息发布
export  default class App extends Component{

    render() {
        return (
            <div className="container">
                <Search />
                <Main />
            </div>
         )
    }
}