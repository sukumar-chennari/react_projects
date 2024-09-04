import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../myscreens/homeScreen"
import { AboutScreen } from "../myscreens/aboutScreen"
import { UndefinedScreen } from "../myscreens/undefinedScreen"
import { SettingScreen } from "../myscreens/settingScreen"
import { ContactScreen } from "../myscreens/contactScreen"

const NavigatorStack=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>   
                <Route path="about" element={<AboutScreen/>}/> 
                <Route path="/settings" element={<SettingScreen/>}/> 
                <Route path="/contact-us" element={<ContactScreen/>}/> 
                <Route path="/*" element={<UndefinedScreen/>}/> 
            </Routes> 
        </BrowserRouter>
    )
}
export {NavigatorStack}