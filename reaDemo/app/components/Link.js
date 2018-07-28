/**
 * Created by hustcxy on 2017/4/23.
 */
import React,{PropTypes} from 'react'

const Link=({active,children,onClick})=>{
    if(active){
        return <span>{children}</span>   //字符串
    }
    return (
        <a   //a便签形式
            href="#"
            onClick={e=>{   //此onClick为<a>便签的点击事件
            e.preventDefault()
            onClick()      //此onClick()为FilterLink传进来的
            }}             //会调用方法setVisibility(ownProps.filter)
        >
         {children}
        </a>
    )
}

Link.propTypes={
    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Link