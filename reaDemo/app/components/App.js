/**
 * Created by hustcxy on 2017/4/23.
 */
import React from 'react'
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import Footer from "./Footer"




//这里相当于写react的render方法
const App=()=>(
   <div>
     <AddTodo />          /*容器组件*/
     <VisibleTodoList />  /*容器组件，要用的UI组件TodoList*/
     <Footer />           /*UI组件*/
   </div>
)

export default App
//显示组件上套一层逻辑组件，
// 是为了得到显示组件的所需要的这些props

//UI组件上套一层容器组件，
//是为了得到UI组件的所需要的这些props属性