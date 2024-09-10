import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FirstScreen } from "./first"
import { ControlledForm } from "../hooks/controlled/controlled"
import { Recipe } from "../axios/axiosfetch"
import { TodoList } from "../hooks/todo"
import GetLocation from "../location/location"
import { createContext } from "react"


export const UserDetails=createContext()

export const NavStack=()=>{
    return(
        <>
        <UserDetails.Provider username={{
            username:'sukumar'
        }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstScreen/>}>
                    <Route path="/home" element={<Recipe/>}/>
                    <Route path="/about" element={<TodoList/>}/>
                    <Route path="/settings" element={<ControlledForm/>}/>
                    <Route path="/contact-us" element={<GetLocation/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
        </UserDetails.Provider>
       
    </>

        
    )
}