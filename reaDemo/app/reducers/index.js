/**
 * Created by hustcxy on 2017/4/23.
 */
import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//合并之后的整体的reducer定义为todoApp
const todoApp=combineReducers({
    todos,
    visibilityFilter
})

export default todoApp   //允许输出

