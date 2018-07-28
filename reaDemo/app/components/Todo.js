/**
 * Created by hustcxy on 2017/4/23.
 */
import React,{PropTypes} from 'react'

const Todo=({onClick,completed,text})=>(//相当于render方法
    <li
       onClick={onClick}
       style={{textDecoration:completed?"line-through":"none"}}
    >
        {text}
   </li>
)

Todo.propTypes={
           onClick:PropTypes.func.isRequired,
           completed:PropTypes.bool.isRequired,
           text:PropTypes.string.isRequired
}

export default Todo