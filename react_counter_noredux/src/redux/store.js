import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {comments} from './reducers'
//使用异步中间件
const store = createStore(comments,composeWithDevTools(applyMiddleware(thunk)));//内部会第一次调用reduer函数，得到初始state

export default store
