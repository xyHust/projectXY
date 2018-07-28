/**
 * Created by hustcxy on 2017/4/23.
 */
//一个代办项的响应
const  todo=(state={},action)=>{
    switch (action.type){
        case "ADD_TODO":
            return{
                id:action.id,
                text:action.text,
                completed:false,
            }
        case "TOGGLE_TODO":
            if(state.id!==action.id){
                return state
            }
            return object.assign({},state,{
                completed:!state.completed
            })
        default:
            return state;
    }
}

//全部代办项的响应(代办项列表的响应)
const todos=(state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                todo(undefined,action)
            ]
        case "TOGGLE_TODO":
            return state.map(t=>todo(t,action))
        default:
            return state
    }
}

export default todos








