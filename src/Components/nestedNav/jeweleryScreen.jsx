import axios, { all } from "axios"
import { useEffect, useState } from "react"
import CustomCard from "./card"

export const JeweleryScreen=()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [allData,setAllData]=useState([])

    const fetchData=async ()=>{
        try{
            let {data,status}=await axios.get('https://fakestoreapi.com/products/category/jewelery')
            if(status==200){
                setAllData(data)
                console.log(data)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div style={{display:'flex', height:'200px', flexWrap:'wrap'}}>
            {
                allData.map(each=>{
                    return(
                        <CustomCard data={each}/>
                    )
                })
            }
        </div>
    )
}