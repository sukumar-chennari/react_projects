

const Image=()=>{
    return (
        <img src="./src/assets/react.svg" alt="" height={200} width={300} />
    )
}


// export const Image1=(prop)=>{
//     console.log(prop)
//     const {source}=prop
//     return(
//        <img src={source} alt="" />
//     )
// }

export const CustomImage=(props)=>{
    
    let {source,alternateText='image',width=100,height=100}=props
    return (
        <img src={source} alt={alternateText} width={width} height={height}/>
    )
}
export default Image