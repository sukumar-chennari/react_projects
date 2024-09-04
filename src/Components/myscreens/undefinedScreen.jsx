import { useNavigate } from "react-router-dom"

const UndefinedScreen=()=>{
    const navigate= useNavigate()
    const buttonHandler=()=>{
       
        navigate("/")
    }
    return (
        <>
        <h1>!!!!!!!Sorry!!!!!!</h1>
        <button onClick={buttonHandler}>Back to Home</button>
        </>
    )
}

export {UndefinedScreen}