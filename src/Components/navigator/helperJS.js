import { act, useReducer } from "react"

export const intialData={
    count:0
}




export const IncrementAction={
    type:'INCREMENT'
}
export const DecrementAction={
    type:'DECREMENT'
}

export const ResetAction={
    type:'RESET'
}



export const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT': return {...state,count:state.count+1}
        case 'DECREMENT': return {...state,count:state.count-1}
        case 'RESET': return {...state,count:0}
        default: return {state}
    }
}