import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ControlledForm } from "../hooks/controlled/controlled"
import { First } from "./first"

export const NavStack=()=>{
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<First/>}>
                    <Route index element={<ControlledForm/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}