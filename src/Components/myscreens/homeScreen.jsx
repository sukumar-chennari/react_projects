import { useContext } from "react"
import { Navbar } from "../navbar/navbar"
import { UserDetails } from "../nestedNav/nav-stack"
import { CounterDetails } from "../navigator/navigator-stack"

const HomeScreen=()=>{
    const {currentState}=useContext(CounterDetails)
    return(
        <>
            <Navbar/>
            {console.log(currentState.count)}
            <h1>Welcome to home screen</h1>
            <h2>{`Couter ${currentState.count} `}</h2>
        </>
    ) 
}

export {HomeScreen}