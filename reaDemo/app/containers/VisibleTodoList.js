/**
 * Created by hustcxy on 2017/4/23.
 */
import {connect} from "react-redux";
import {toggleTodo} from "../actions";
import TodoList from "../app/components/TodoList"



const getVisibleTodos=(todos,filter)=>{
    switch (filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed)
    }
}



const mapStateToProps=(state)=>{
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList=connect(
    mapStateToProps,       //状态变化时怎么影响到属性
    mapDispatchToProps     //分发行为时怎么影响到属性
)(TodoList)


export default VisibleTodoList

//

