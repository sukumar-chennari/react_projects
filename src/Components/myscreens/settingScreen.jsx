import { useContext } from "react"
import { Navbar } from "../navbar/navbar"
import { CounterDetails } from "../navigator/navigator-stack"
import { DecrementAction, IncrementAction, ResetAction } from "../navigator/helperJS"


const SettingScreen=()=>{
    const {currentState,dispatch}=useContext(CounterDetails)
    return(
        <>
            <Navbar/>
            <h2>{`Couter ${currentState.count} `}</h2>
            <h1>Welcome to settings screen</h1>

            <button onClick={()=>{dispatch(IncrementAction)}}>Increment</button>
            <button onClick={()=>{if(count>0)dispatch(DecrementAction)}}>Decrment</button>
            <button onClick={()=>{ dispatch(ResetAction)}}>Reset</button>

        </>
    ) 
}

export {SettingScreen}