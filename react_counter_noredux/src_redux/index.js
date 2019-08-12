import React from 'react'
import ReactDom from 'react-dom'

import store from './redux/store'
import App from './components/app'

//生成一个store对象

function renders(){
    ReactDom.render(<App store={store}/>,document.getElementById('root'));
}
//初始化渲染
renders();
//订阅监听（store中的状态变化了，就会进行重绘）
store.subscribe(renders);
