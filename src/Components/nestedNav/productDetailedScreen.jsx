import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProductDetailScreen=()=>{
    const [data,setData]=useState({})
     const dynamicPath=useParams()
    {console.log(dynamicPath)}
    useEffect(()=>{
        fetchData()
    },[dynamicPath])
    
    const fetchData=async ()=>{
        try{
            let {data,status}=await axios.get(`https://fakestoreapi.com/products/${dynamicPath}`)
            if(status==200){
                setData(data)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
            <h1>Welcome to detailed product</h1>
            {console.log(data)}
            {
                <>
                       <h2>{data.title}</h2>
                       <img src={data.image} alt="Product image" />
                       <button>Buy Now</button>
                </>

             
            }
        </>
    )
}