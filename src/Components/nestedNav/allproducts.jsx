import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navbar } from "../navbar/navbar"
import CustomCard from "./card"
import { UserDetails } from "./nav-stack"

export const AllProductsScreen=()=>{
    const {username,counter}= useContext(UserDetails)
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
            <h1>Welcome {username}</h1>
            <h2>Counter {counter}</h2>
            <div style={{display:'flex', height:'200px', flexWrap:'wrap'}}>
                {allData.map(each=>{
                    return <CustomCard data={each}/>
                })}
            </div>
        </>
        
    )
}