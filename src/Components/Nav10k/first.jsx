import { useContext } from "react";
import { CustomImage } from "../image/image";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { UserDetails } from "./navStack";

export const FirstScreen=()=>{
        const username=useContext(UserDetails)
        
        return (
            <>
                <h1>Welcome {username}</h1>
                <div style={{ width: '100%', display: 'flex' , }}>
                    <div style={{ width: '200px', height: '99vh', border: '2px solid', borderTopRightRadius: '8%' }}>
                        <CustomImage width={150} height={150} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HQ4Dg-lKpde8spteOVR5YuAuQDhhrQlsA&s'} />
                       
                        <div  style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <IoHomeOutline style={{ marginRight: '10px' }} />
                             <NavLink to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</NavLink> 
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <IoHomeOutline style={{ marginRight: '10px' }} />
                             <NavLink to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</NavLink> 
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <IoHomeOutline style={{ marginRight: '10px' }} />
                             <NavLink to="/settings" style={{ textDecoration: 'none', color: 'black' }}>Settings</NavLink> 
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <IoHomeOutline style={{ marginRight: '10px' }} />
                             <NavLink to="/contact-us" style={{ textDecoration: 'none', color: 'black'  }}>Contact</NavLink> 
                        </div>
                    </div>
                    <div style={{ flexGrow: 1, border:'1px solid gray' , }}>
                        <Outlet/>
                        {/* Main content goes here */}
                    </div>
                </div>
            </>
        );

}