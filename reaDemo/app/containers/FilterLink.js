/**
 * Created by hustcxy on 2017/4/23.
 */
import {connect} from "react-redux";
import {setVisibilityFilter} from '../actions'
import Link from "../app/components/Link"

const mapStateToProps=(state,ownProps)=>{
    return {
        active:ownProps.filter===state.visibilityFilter
    }
}
//使用ownProps作为参数后，如果容器组件的参数发生
//变化，也会引发UI组件重新渲染。

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}


const FilterLink=connect(
    mapStateToProps,    //状态改变如何影响属性
    mapDispatchToProps, //分发行为如何影响属性
)(Link)

export default FilterLink

//显示组件上套一层逻辑组件，
// 是为了得到显示组件的所需要的这些props

