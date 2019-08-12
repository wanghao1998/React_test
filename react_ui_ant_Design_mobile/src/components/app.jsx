import React,{Component} from 'react'
import {Button,Toast} from 'antd-mobile'
export  default class App extends Component{
    handClick = ()=>{
        Toast.info('提交成功',1,null,false)
    };

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handClick}>Start</Button>
            </div>
         )
    }
}