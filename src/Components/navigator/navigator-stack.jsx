import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../myscreens/homeScreen"
import { AboutScreen } from "../myscreens/aboutScreen"
import { UndefinedScreen } from "../myscreens/undefinedScreen"
import { SettingScreen } from "../myscreens/settingScreen"
import { ContactScreen } from "../myscreens/contactScreen"
import { reducer,intialData} from "./helperJS"
import { createContext, useReducer } from "react"

export const CounterDetails=createContext()
const NavigatorStack=()=>{
    
    const [currentState,dispatch]=useReducer(reducer,intialData)
    
    return (
        <CounterDetails.Provider value={{
            currentState:currentState,
            dispatch
         }}>
             <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>   
                <Route path="about" element={<AboutScreen/>}/> 
                <Route path="/settings" element={<SettingScreen/>}/> 
                <Route path="/contact-us" element={<ContactScreen/>}/> 
                <Route path="/*" element={<UndefinedScreen/>}/> 
            </Routes> 
            </BrowserRouter>
        </CounterDetails.Provider>
       
    )
}
export {NavigatorStack}