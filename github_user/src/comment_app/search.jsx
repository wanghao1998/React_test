import React,{Component} from 'react'
import PropTypes from 'prop-types'
export  default class Search extends Component{
    static propTypes = {
        setsearchName:PropTypes.func.isRequired
    };
    headleClick = ()=>{
        //得到输入的关键字
        const searchName = this.input.value.trim();
        if (searchName){
            this.props.setsearchName(searchName);
        }
        //搜索
    };
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input=input}/>
                    <button onClick={this.headleClick}>Search</button>
                </div>
            </section>
         )
    }
}