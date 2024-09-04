import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "./homeScreen"
import { AllProductsScreen } from "./allproducts"
import { AboutScreen } from "./aboutScreen"
import { ContactScreen } from "./contactScreen"
import { CategorieScreen } from "./categoryScreen"
import { JeweleryScreen } from "./jeweleryScreen"
import { ElectronicsScreen } from "./electronicsScreen"
import { ProductDetailScreen } from "./productDetailedScreen"

export const NavStackNested=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllProductsScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>
                <Route path="contact-us" element={<ContactScreen/>}/>
                <Route path="/categories" element={<CategorieScreen/>}>
                    <Route path="jewelery" element={<JeweleryScreen/>}/>    
                    <Route path="electronics" element={<ElectronicsScreen/>}/>
                </Route>

                <Route path=':productId' element={<ProductDetailScreen/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}