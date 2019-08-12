import React,{Component} from 'react'
export  default class App extends Component{
    state = {
        count:0
    };
    increment = ()=>{
        // 1.得到选择增加数量
        const numbers = this.select.value*1;
        const count = this.state.count+numbers;
        this.setState({count})

    };
    decrement = ()=>{
        // 1.得到选择增加数量
        const numbers = this.select.value*1;
        const count = this.state.count-numbers;
        this.setState({count})

    };
    incrementIfodd = ()=>{
        // 满足为奇数条件更新
        const numbers = this.select.value*1;
        const count = this.state.count
        if(count%2 === 1){
            this.setState({count:count+numbers});
        }
    };
    incremenAsync = ()=>{
        //异步更新
        const numbers = this.select.value*1;
        const count = this.state.count;
        setTimeout(()=>{
            this.setState({count:count+numbers});
        },3000);

    };
    render() {
        const {count} = this.state;
        return (

            <div>
                <p>click {count} times</p>
                <div>
                    &nbsp;&nbsp;
                    <select ref={(select)=>this.select = select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    &nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;&nbsp;
                    <button onClick={this.incrementIfodd}>increment if odd</button>
                    &nbsp;&nbsp;
                    <button onClick={this.incremenAsync}>inccrement async</button>
                </div>
            </div>
         )
    }
}