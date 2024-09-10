import { useMemo, useState } from "react"

export const MilkCalculator=()=>{
    const [milkQuantity,setMilkQuantity]=useState(1)
    const [biryaniQuantity,setBiryaniQuantity]=useState(1)

    const MilkPriceCalci=useMemo(()=>{
        return milkQuantity*50
    },[milkQuantity])

    const milkHandler=()=>{
        setMilkQuantity(milkQuantity+1)
    }

    const BiryaniPriceCalci=useMemo(()=>{
        return biryaniQuantity*300
    },[biryaniQuantity])

    const biryaniHanlder=()=>{
        setBiryaniQuantity(biryaniQuantity+1)
    }
    return (
        <>
        <h1 style={{textAlign:'center'}}> Rice Example </h1>
        <h1>Milk Quantity {milkQuantity} - price {MilkPriceCalci}</h1>
        <h1>Biryani Quantity {biryaniQuantity} - price {BiryaniPriceCalci}</h1>

        <button onClick={milkHandler}>Change Milk Quantity</button>
        <button onClick={biryaniHanlder}>Change Biryani Qunatity</button>
        </>
    )
}