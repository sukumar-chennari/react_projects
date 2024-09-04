import { useState } from "react"
import { Modal } from "./modal"

export const ShowLoginDetails=()=>{
    const [modal,setModal]=useState(false)
    const showModal=()=>{
        console.log('entered')
        setModal(true)
    }

    const closeModal=()=>{
        setModal(false)
    }
    return (
        <>
         <button onClick={showModal}>Show Modal</button>
        {
           
            (modal && <Modal closeModal={closeModal}/>)

        }
        
         
       
       </>
    )
}