/**
 * Created by hustcxy on 2017/4/23.
 */
import React,{PropTypes} from 'react'
import Todo from "./Todo";

const TodoList=({todos,onTodoClick})=>(
    <ul>
      {todos.map((todo)=>
          <Todo
             key={todo.id}
             {...todo}
             onClick={()=>onTodoClick(todo.id)}
          />
    )}
    </ul>
    )


TodoList.propTypes={
    todos:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        completed:PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick:PropTypes.func.isRequired
}

export default TodoList
//父组件通过
// 当前页面里的Todo组件将属性传给子组件Todo