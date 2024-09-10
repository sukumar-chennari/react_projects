import { useContext } from "react"
import { Navbar } from "../navbar/navbar"
import { CounterDetails } from "../navigator/navigator-stack"

const ContactScreen=()=>{
    const {currentState}=useContext(CounterDetails)
    return(
        <>
            <Navbar/>
            <h1>Welcome to contact screen</h1>
            <h2>{`Couter ${currentState.count} `}</h2>
        </>
    ) 
}

export {ContactScreen}