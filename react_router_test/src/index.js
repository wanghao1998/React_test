import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/app'
import './index.css'


ReactDom.render((
    //使用Router管理整个应用
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ),document.getElementById('root'));