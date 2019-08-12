import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../comment-item/comment-item'


import './css/index.css'


export  default class Lists extends Component{
    static propTypes = {
        comments:PropTypes.array.isRequired,
        delCommentse:PropTypes.func.isRequired
    };
    render() {
        const {comments,delCommentse} = this.props;
        const display = comments.length === 0 ? 'block' : 'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment,index)=><Item comment={comment} key={index} delCommentse={delCommentse} index={index}/>)}
                </ul>
            </div>
        )
    }
}
/*
Lists.proptypes = {
  comments:PropTypes.array.isRequired
};*/
