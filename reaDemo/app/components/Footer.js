/**
 * Created by hustcxy on 2017/4/23.
 */
import React from 'react'
import FilterLink from "../containers/FilterLink"


const Footer=()=>(
    <p>
       Show:
       {" "}
       <FilterLink filter="SHOW_ALL">
        All
       </FilterLink>
       {", "}
       <FilterLink filter="SHOW_ACTIVE">
         Active
       </FilterLink>
       {", "}
       <FilterLink filter="SHOW_COMPLETED">
           completed
       </FilterLink>
    </p>
)

export default Footer  //输出组件，让其他的组件可以调用它