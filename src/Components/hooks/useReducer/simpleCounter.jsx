import React from "react"
import { useReducer, useState } from "react"
const setCounter=(state,val)=>{
    console.log('state ',state,'val ',val)
    return state+ val
}
export const StaticCounter=()=>{
   const [counter,dispatch]= useReducer(setCounter,0)
 
   return(
    <React.Fragment>
             <h1 style={{width:'100%'}}>Static Counter</h1>
    <div style={{display:'flex', alignContent:'center', justifyContent:'center', width:'100%', padding:'100px'}}>
        
        <button onClick={()=>{dispatch(-1)}}>-</button>
        <div>{`Counter ${counter}`}</div>
        <button onClick={()=>{dispatch(1)}}>+</button>
    </div>

    </React.Fragment>
   
   )
}