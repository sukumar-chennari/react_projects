
import { useContext } from "react"
import { Navbar } from "../navbar/navbar"
import { UserDetails } from "./nav-stack"


export const SettingScreen=()=>{
   const {username,counterHandler,themeHandler,decrementCounter,resetCounter}=useContext(UserDetails)
   const changeTheme=()=>{
    themeHandler()
   }

   const countHandler=()=>{
    counterHandler()
   }
   const resetHandler=()=>{
    resetCounter()
   }
   const decrementHandler=()=>{
    decrementCounter()
   }
    return (
        <>
           
            <Navbar/>
            <h1>Welcome {username}</h1>
            <h2>Welcome to Setting Screen</h2>
            <button onClick={changeTheme} >Change Theme</button>
            <div>
                <button onClick={countHandler}> Change Count</button>
                <button onClick={resetHandler}> Reset Count</button>
                <button onClick={decrementHandler}> DecreaseCount</button>
            </div>
            
        </>
    )
    
}