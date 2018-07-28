/**
 * Created by hustcxy on 2017/4/23.
 */
let nextTodoId=0;
//定义addTodo这个Action
export const addTodo=(text)=>{
    return{
        type:"ADD_TODO",
        id:nextTodoId++,
        text
    }
}

// 定义setVisibility这个action
export const setVisibilityFilter=(filter)=>{//此处使用了匿名函数，用了es6的语法写的
    return {
        type:"SET_VISIBILITY_FILTER",
        filter
    }
}

//定义toggleTodo这个Action
export const toggleTodo=(id)=>{
    return {
       type:"TOGGLE_TODO",
       id
    }
}





