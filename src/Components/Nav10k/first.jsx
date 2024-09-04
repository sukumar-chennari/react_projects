import { NavLink, Outlet } from "react-router-dom";
import { CustomImage } from "../image/image"
import { IoHomeOutline,IoSettingsOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { RiContactsLine } from "react-icons/ri";
import { NavStack } from "./navStack";

import './navlink.css'

const First=()=>{
    return (
        <>
        
        <div style={{width:'100%', display:'flex'}}>
            <div style={{width:'200px', paddingLeft:'5px', height:'100vh', border:'2px solid', borderTopRightRadius:'8%', display:'flex', flexDirection:'column' , justifyContent:'space-evenly'}}>
                <CustomImage width={150} height={150} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HQ4Dg-lKpde8spteOVR5YuAuQDhhrQlsA&s'}/>
                <div className="navLink">
                    <IoHomeOutline />
                    <NavLink to={"/"}></NavLink>
                    <a href="">Home</a>
                </div>
                <div className="navLink">
                    <FcAbout />
                    <a href="">About</a>
                </div >
                <div className="navLink">
                    <IoSettingsOutline />
                    <a href="">Settings</a>
                </div>

                <div className="navLink">
                    <RiContactsLine />
                    <a href="">Contact</a>
                </div>
            </div>
            <div> <Outlet/></div>
        </div>
        </>
    )
}

export {First}