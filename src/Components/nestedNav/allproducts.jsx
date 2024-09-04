import axios from "axios"
import { useEffect, useState } from "react"
import { Navbar } from "../navbar/navbar"
import CustomCard from "./card"

export const AllProductsScreen=()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [allData,setAllData]=useState([])

    const fetchData=async ()=>{
        try{
            let {data,status}=await axios.get('https://fakestoreapi.com/products')
            if(status==200){
                setAllData(data)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
            <Navbar/>
            <div style={{display:'flex', height:'200px', flexWrap:'wrap'}}>
                {allData.map(each=>{
                    return <CustomCard data={each}/>
                })}
            </div>
        </>
        
    )
}