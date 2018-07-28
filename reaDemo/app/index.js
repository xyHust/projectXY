/**
 * Created by hustcxy on 2017/4/23.
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store=createStore(todoApp)  //todoApp为合并之后的reducer

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


