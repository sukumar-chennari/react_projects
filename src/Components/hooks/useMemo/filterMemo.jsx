// You have a list of items and a filter function that filters them based on a condition. 
// You don't want the filter to run on every render unless the items or filter criteria change.

import { useMemo, useState } from "react"



export const FilterMemo=()=>{
    //const items=['apple', 'banana','custard apple','jack fruit']
    const [fruit,setFruit]=useState('apple')


    const fruitHandler=useMemo(()=>{
        return fruit    
        console.log('rendering')
    },[fruit])

    const clickHandler=()=>{
        if(fruit =='apple'){
            setFruit('banana')
        }
        else setFruit('apple')
    }
    return (
        <>
            <h1>Selected  fruit from list is { fruitHandler}</h1>
            <button onClick={clickHandler}>Change fruit</button>

        </>
    )
}