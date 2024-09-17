import { useCallback, useState } from "react"
import { MainHeading } from "../../heading/headings"
import CustomButton  from "../../button/button"
import React from "react"

export const UseCallbackEx=()=>{
    const [toggle,setToggle]=useState(false)
    const [age,setAge]=useState(1)

    const clickhandler=useCallback(()=>{
        setToggle(!toggle)   
    },[toggle])

    const ageHandler=useCallback(()=>{
        setAge(age+1)
    },[age])

    return (
        <>
        <MainHeading heading={(toggle?'Welcome User':'please login')}></MainHeading>
        <CustomButton text='change'  onPress={clickhandler}/>

        <h2>age {age}</h2>
        <CustomButton text='change age' onPress={ageHandler}/>
        </>
    )
}