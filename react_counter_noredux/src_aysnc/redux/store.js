import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'
//使用异步中间件
const store = createStore(counter,composeWithDevTools(applyMiddleware(thunk)));//内部会第一次调用reduer函数，得到初始state

export default store
