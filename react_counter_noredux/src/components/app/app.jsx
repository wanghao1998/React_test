import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Add from '../comment-add/comment-add'
import Lists from '../comment-list/comment-lists'

export  default class App extends Component{
    static propTypes = {
        comments:PropTypes.array.isRequired,
        addComments:PropTypes.func.isRequired,
        delCommentse:PropTypes.func.isRequired,
        addCommentsAsync:PropTypes.func.isRequired
    };
    //给组件类指定start

    componentDidMount() {
        //模拟发送异步ajax请求获取数据
        this.props.addCommentsAsync();
    }

    //添加评论

    render() {
        const {comments,addComments,delCommentse} = this.props;
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
                    <Add addComments={addComments}/>
                    <Lists comments={comments} delCommentse={delCommentse}/>
                </div>
            </div>
         )
    }
}