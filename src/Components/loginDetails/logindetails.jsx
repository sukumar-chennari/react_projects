import { useState } from "react"
import { Modal } from "./modal"
import { CustomImage } from "../image/image";

import CustomTable from "./table";


export const ShowLoginDetails=()=>{
    const [modal,setModal]=useState(false)
    const [home,setHome]=useState(false)
    const [allUserData,setAllUserData]=useState([])
    const [table,setTable]=useState(false)
    const showModal=()=>{
        setModal(true)
    }

    const closeModal=()=>{
        setModal(false)
        setHome(false)
        setTable(true)
    }

    const getData=()=>{
        const storedData = localStorage.getItem('userData');
        if (storedData) {
          setAllUserData([...allUserData, JSON.parse(storedData)]);
        }
        console.log('All users:', allUserData);
    }

    const homeHandler=()=>{
        setHome(true)
    }
    
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '200px', height: '100vh', border: '2px solid', borderTopRightRadius: '8%', position: 'fixed' }}>
                <CustomImage width={150} height={150} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HQ4Dg-lKpde8spteOVR5YuAuQDhhrQlsA&s'} />

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <button onClick={homeHandler}>Home</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <button>About</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <button>Settings</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <button>Contact Us</button>
                </div>
            </div>

            <div style={{ flexGrow: 1, marginLeft: '220px', padding: '20px' }}>
                {home && <button onClick={showModal}>Add</button>}

                {modal && <Modal closeModal={closeModal} getData={getData} />}

                {table && (
                    <div>
                        <h1>Table showed</h1>
                        <CustomTable data={allUserData} />
                    </div>
                )}
            </div>
        </div>
    );
}