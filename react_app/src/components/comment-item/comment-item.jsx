import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './commentitem.css'

export  default class Item extends Component{
    static propTypes = {
        comment:PropTypes.object.isRequired,
        delectComments:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    };
    handleClick = ()=>{
        const {comment,delectComments,index} = this.props;
        //提示
        if(window.confirm(`确定删除${comment.username}的评论么`)){
            //确定删除
            delectComments(index);
            alert('删除成功');
        }
    };
    render() {
        const {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
         )
    }
}