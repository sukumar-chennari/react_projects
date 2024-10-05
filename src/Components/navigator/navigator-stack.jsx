import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../myscreens/homeScreen"
//import { AboutScreen } from "../myscreens/aboutScreen"
import React, { createContext, Suspense, useReducer } from "react"

const AboutScreen=React.lazy( ()=>import("../myscreens/aboutScreen") )

import { UndefinedScreen } from "../myscreens/undefinedScreen"
import { SettingScreen } from "../myscreens/settingScreen"
import { ContactScreen } from "../myscreens/contactScreen"
import { reducer,intialData} from "./helperJS"



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
                <Route path="about" element={
                    <Suspense fallback={<h4>Loading</h4>}>
                        <AboutScreen/>
                    </Suspense>
                    }/> 
                <Route path="/settings" element={<SettingScreen/>}/> 
                <Route path="/contact-us" element={<ContactScreen/>}/> 
                <Route path="/*" element={<UndefinedScreen/>}/> 
            </Routes> 
            </BrowserRouter>
        </CounterDetails.Provider>
       
    )
}
export {NavigatorStack}