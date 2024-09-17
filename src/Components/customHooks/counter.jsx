import { useState } from "react"
import {  counterHook } from "./counterHook"
import { useNetworkStatus } from "./networkHook"
import usePreviousValue from "./previousHook"
import { useGetLocation } from "./locationHook"

export const Counter=()=>{
    const [val,setVal]=useState(0)
    const {isOnline}=useNetworkStatus()
    const location=useGetLocation()

    const previousValue=usePreviousValue(val)
    const clickHandler=(operation)=>{
        let value=counterHook(val,operation)
        setVal(value)
    }

    return(
        <>
            <h1 style={{textAlign:'center'}}>Custom Counter Hook</h1>
            <h1>Your network is {isOnline?'ON':'OFF'}</h1>
            <h1>{`YOur latitude ${location.latitude} '<--> longitude ${location.longitude}`}</h1>
            <h1>Count: {val}</h1>
            <button onClick={()=>{clickHandler('INC')}}>Increment</button>
            <button onClick={()=>{clickHandler('RESET')}}>Reset</button>
            <button onClick={()=>{clickHandler('DEC')}}>Decrement</button>
        </>
    )
}