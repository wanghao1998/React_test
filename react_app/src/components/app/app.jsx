import React,{Component} from 'react'
import Add from '../comment-add/comment-add'
import Lists from '../comment-list/comment-lists'

export  default class App extends Component{
    /*constructor(props){
        super(props)
        this.state = {
            comments:[
                {username:'tom',content:'react太好用了'}
            ]
        }
    }*/
    //给组件类指定start
    state = {
        comments:[
            {username:'tom',content:'react太好用了'},
            {username:'kobe',content:'react太好用了'},
            {username:'feack',content:'react太好用了'}
        ]
    };
    //添加评论
    addComments = (comment)=>{
        const {comments} = this.state;
        comments.unshift(comment);
        //更新状态
        this.setState({comments});
    };
    //删除评论
    delectComments = (index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        //更新状态
        this.setState({comments});
    };
    render() {
        const {comments} = this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComments={this.addComments}/>
                    <Lists comments={comments} delectComments={this.delectComments}/>
                </div>
            </div>
         )
    }
}