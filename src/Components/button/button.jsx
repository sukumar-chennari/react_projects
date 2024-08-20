export const CustomButton=(props)=>{
    const {text,onPress=()=>{},bgColor='green'}=props
    const buttonText=text
    return <button onClick={onPress} style={{backgroundColor:bgColor}}>{buttonText}</button>
}