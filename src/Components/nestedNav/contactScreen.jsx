import { useContext } from "react"
import { Navbar } from "../navbar/navbar"
import { UserDetails } from "./nav-stack"

export const ContactScreen=()=>{
    const {username,counter}=useContext(UserDetails)
    return(
        <>
            <Navbar/>
            <h1>Welcome {username}</h1>
            <h2>Counter {counter}</h2>
            <h1>Welcome to Contact screen</h1>
        </>
    ) 
}