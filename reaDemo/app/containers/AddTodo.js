/**
 * Created by hustcxy on 2017/4/23.
 */
import React from 'react'
import {connect} from "react-redux";
import {addTodo} from "../actions";


let AddTodo=({dispatch})=>{   //相当于render方法
    let input;

    return (
        <div>
          <form onSubmit={e=>{
              e.preventDefault();
              if(!input.value.trim()){return}
              dispatch(addTodo(input.value));
              input.value=""
    }}>
            <input ref={node=>{input=node}}/>
            <button type="submit">
               Add Todo
            </button>
          </form>
        </div>
    )
}

AddTodo=connect()(AddTodo)    //高阶函数的写法

export default AddTodo


