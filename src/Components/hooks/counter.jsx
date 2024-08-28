import { useState } from "react"

const Counter =()=>{
    let [count,setCount]=useState(10)

    const operate=(operation)=>{
        switch(operation){
            case 'increment':
                setInterval(()=>{
                    setCount(count=>count+1)
                },1000)
                
                break

            case 'decrement':
                if(count>0){
                    setCount(count-1)
                }
                break
            case 'reset':
                setCount(0)
                break
            default:
                break

        }
       
    }
    return(
        <>
            <h1>Count: {count}</h1>

            <button onClick={()=>operate('increment')}>Increment</button>
            <button onClick={()=>operate('reset')}>reset</button>
            <button onClick={()=>operate('decrement')}>Decrement</button>
        </>
    )
}

export {Counter}

