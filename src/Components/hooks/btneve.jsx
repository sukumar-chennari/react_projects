import { useState } from "react";
import { buttons } from "./jshelpers";

export const ButtonStack=()=>{
    const [btns,setBtns]=useState(buttons())
    const [flag,setFlag]=useState('')
    const clickHandler=(id)=>{
        if(id%2===0){
            setFlag('EVEN')
        }
        else
            setFlag('ODD')
    }
    return(
        <>
            <h1>{flag?`Your Clicked ${flag} button`:`Hi! Click any button `}</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                 btns.map(eachBtn=>{
                    return (
                        <button style={{margin:'2px'}} onClick={()=>clickHandler(eachBtn)} key={eachBtn}>{`Button ${eachBtn}`}</button>
                    )
                })
            }
            </div>
        </>
    )
}