import axios from "axios"
import { useEffect, useState } from "react"

export const UseEffectExample=()=>{
   
    const [count,setCount]=useState(0)
    const [type,setType]=useState('products')
    const [allData,setAllData]=useState([])

    useEffect(()=>{
        console.log('rendering 1 time')
        document.title=`Current age ${count}`
        fecthData(type)
    },[count,allData])

    const fecthData=async (type)=>{
        try{
            let {data}=await axios.get(`https://fakestoreapi.com/${type}`)
            setAllData(data)
         }
         catch(err){
            console.log(err)
         }
    }
    const incrementHandler=()=>{
        setCount(count+1)
    }
    const buttonHandler=(type)=>{
       setType(type)
    }
    return(
        <>
        <h1>UseEffect Example</h1>
        <h2>{`Count ${count}`}</h2>
        {
           <div>
            <button onClick={incrementHandler}>Increment</button>
           </div> 
        }
        {
            ['products','carts','users'].map((type,i)=>{
                return (<button key={i} onClick={()=>{buttonHandler(type)}}>{type}</button>)
            })
        }
        {
            <p>{JSON.stringify(allData)}</p>
        }
        </>
        
        
    )
}

