import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import News from './News'
import Masg from './Masg'
import MyNavLink from "../components/MyNavLink";



export  default class Home extends Component{
    render() {
        //嵌套路由
        return (
            <div>
                <h2>Home 的组件</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to={'/home/news'}>News</MyNavLink>

                        </li>
                        <li>
                            <MyNavLink to={'/home/masg'}>Masg</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route  path='/home/news' component={News}/>
                            <Route  path='/home/masg' component={Masg}/>
                            <Redirect to='/home/news'/>
                        </Switch>
                    </div>
                </div>
            </div>
         )
    }
}