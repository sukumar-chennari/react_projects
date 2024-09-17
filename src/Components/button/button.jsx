import React from "react"
const CustomButton=(props)=>{
    const {text,onPress=()=>{},bgColor='green'}=props
    console.log('child re rendering', text)
    const buttonText=text
    return <button onClick={onPress} style={{backgroundColor:bgColor}}>{buttonText}</button>
}

export default React.memo(CustomButton)