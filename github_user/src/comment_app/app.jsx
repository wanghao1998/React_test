import React,{Component} from 'react'
import Main from "./main";
import Search from "./search";

export  default class App extends Component{
    state = {
        searchName:''
    };
    setsearchName = (searchName) =>{
        this.setState({searchName:searchName});
    };
    render() {
        return (
            <div className="container">
                <Search setsearchName={this.setsearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
         )
    }
}