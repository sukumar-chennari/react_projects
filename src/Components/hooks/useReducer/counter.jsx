import {  useReducer } from "react";
import React from "react";
const setCounter=(state,action)=>{
    switch(action.type){
        case 'INC': return state+1;
        case 'DEC':return state-1;
        default: return 0
    }
}
export const Counter = () => {
    const [counter,dispatch]=useReducer(setCounter,0)
  return (
    
    <React.Fragment>
      <h1 style={{ width: "100%" }}>Dynamic Counter</h1>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          padding: "100px",
        }}
      >
        <button
          onClick={() => {
            dispatch({
                type:'DEC',
                payload:'hello'
            });
          }}
        >
          -
        </button>
        <div>{`Counter ${counter}`}</div>
        <button
          onClick={() => {
            dispatch({
                type:'INC',
                payload:'hai'
            });
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch({
                type:'RESET',
                payload:'reset'
            });
          }}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};
