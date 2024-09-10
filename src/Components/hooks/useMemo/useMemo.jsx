import { useMemo, useState } from "react"


 export const AgeCalculator=()=>{
    const [age,setAge]=useState(18)
    const [salary,setSalary]=useState(10000)
    const AgeCalculator=useMemo(()=>{
        return age%2==0?'even':'odd'
    },[age])

    const ageHandler=()=>{
        setAge(age+1)
    }
    const salaryHandler=()=>{
        setSalary(salary+1000)
    }
    return(
        <>
            <h1 style={{textAlign:'center', marginTop:'20px'}}>AgeCalculator Example </h1>
            <h1>Age={age} is {AgeCalculator}</h1>

            <h1>Salary = {salary}</h1>

            <button onClick={ageHandler}>Change Age</button>
            <button onClick={salaryHandler}>Change Salary</button>
        </>
    )
}