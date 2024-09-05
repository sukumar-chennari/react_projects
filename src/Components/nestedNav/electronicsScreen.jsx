import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CustomCard from "./card"
import { UserDetails } from "./nav-stack"

export const ElectronicsScreen=()=>{

    useEffect(()=>{
        fetchData()
    },[])
    const [allData,setAllData]=useState([])

    const fetchData=async ()=>{
        try{
            let {data,status}=await axios.get('https://fakestoreapi.com/products/category/electronics')
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
           
             <div style={{display:'flex', height:'200px', flexWrap:'wrap'}}>
        {
            allData.map(each=>{
                
                return(
                    <CustomCard data={each}/>
                )
            })
        }
    </div>
        </>
       
    )
}