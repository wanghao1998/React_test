import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export  default class Main extends Component{
    static propTypes = {
        searchName:PropTypes.string.isRequired
    };
    state = {
        //第一次进入未搜索
        initView:true,
        //是否搜索中
        loading:false,
        //存储用户
        users:null,
        //错误信息
        errorMsg:null
    };
    //当组件接收到新的属性时回调
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps;
        console.log(searchName);
        //更新状态
        this.setState({initView:false,loading:true})
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url).then(response =>{
            //得到相响应数据
            const result = response.data;
            const users = result.items.map(item =>{
                return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
            })
            //更新状态成功
            this.setState({loading:false,users})
        }).catch(error =>{
            this.setState({loading:false,errorMsg:error})
        })
    }

    render() {

        const {initView,loading,users,errorMsg} = this.state;
        if(initView){
            return <h2>请输入关键字搜索</h2>
        }else if(loading){
            return <h2>正在请求中....</h2>
        }
        else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else {
            return (
                <div className='row'>
                    {
                        users.map((user,index) =>(
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width:100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}