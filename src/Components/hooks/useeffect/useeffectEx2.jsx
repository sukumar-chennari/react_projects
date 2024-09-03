import { useEffect, useState } from "react"

const UseEffectEx2=()=>{
    let obj={
        x:0,
        y:0
    }
    const [coords,setCoords]=useState(obj)
    useEffect(()=>{
       window.addEventListener('mousemove',(e)=>{
        let obj={
            x:e.clientX,
            y:e.clientY
        }
        setCoords(obj)
        console.log(e)
       })
        
    },[coords])
    
    return(
        <h1>{`X= ${coords.x} Y= ${coords.y}`}</h1>
    )
}
export {UseEffectEx2}