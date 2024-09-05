import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "./homeScreen"
import { AllProductsScreen } from "./allproducts"
import { AboutScreen } from "./aboutScreen"
import { ContactScreen } from "./contactScreen"
import { CategorieScreen } from "./categoryScreen"
import { JeweleryScreen } from "./jeweleryScreen"
import { ElectronicsScreen } from "./electronicsScreen"
import { ProductDetailScreen } from "./productDetailedScreen"
import { createContext, useState } from "react"
import { SettingScreen } from "./settingScreen"

export const UserDetails =createContext()


export const NavStackNested=()=>{
    const [username,setUsername]=useState('Sukumar')
    const [counter,setCounter]=useState(0)
    const [theme,setTheme]=useState(true)

    const counterHandler=()=>{
        setCounter(counter+1)
    }
    const themeHandler=()=>{
        setTheme(!theme)
    }

    const resetCounter=()=>{
        setCounter(0)
    }

    const decrementCounter=()=>{
        setCounter(counter-1)
    }
    return (
       <UserDetails.Provider value={{
        username,
        counter,
        darkTheme:theme,
        counterHandler,
        themeHandler,
        resetCounter,
        decrementCounter
       }
        
       }>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllProductsScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>
                <Route path="contact-us" element={<ContactScreen/>}/>
                <Route path="/categories" element={<CategorieScreen/>}>
                    <Route path="jewelery" element={<JeweleryScreen/>}/>    
                    <Route path="electronics" element={<ElectronicsScreen/>}/>
                </Route>
                <Route path="settings" element={<SettingScreen/>}/>

                <Route path='products/:productId' element={<ProductDetailScreen/>}></Route>
            </Routes>
        </BrowserRouter>
       </UserDetails.Provider>
    )
}