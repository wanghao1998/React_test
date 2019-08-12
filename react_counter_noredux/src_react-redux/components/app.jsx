import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component{
    static propTypes = {
        count:PropTypes.number.isRequired,
        incrementCreator:PropTypes.func.isRequired,
        decrementCreator:PropTypes.func.isRequired
    };
    increment = ()=>{
        // 1.得到选择增加数量
        const numbers = this.select.value*1;
        //调用store方法更新状态
        this.props.incrementCreator(numbers)

    };
    decrement = ()=>{
        // 1.得到选择增加数量
        const numbers = this.select.value*1;
        this.props.decrementCreator(numbers)

    };
    incrementIfodd = ()=>{
        // 满足为奇数条件更新
        const numbers = this.select.value*1;
        const count = this.props.count;
        if(count%2 === 1){
            this.props.incrementCreator(numbers)
        }
    };
    incremenAsync = ()=>{
        //异步更新
        const numbers = this.select.value*1;
        setTimeout(()=>{
            this.props.incrementCreator(numbers)
        },3000);

    };
    render() {
        const {count} = this.props
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

