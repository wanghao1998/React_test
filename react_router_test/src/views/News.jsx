import React,{Component} from 'react'
export  default class News extends Component{
    state = {
      newsArr:[
          '001',
          '002',
          '003'
      ]
    };
    render() {
        return (
            <ul>
                {
                    this.state.newsArr.map((news,index)=><li key={index}>{news}</li>)
                }
            </ul>
         )
    }
}