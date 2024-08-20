
 export const MainHeading=(prop)=>{
    //console.log(prop)
    const {heading}=prop
    const headStyle={backgroundColor:"red"}
    return (
        <h1 style={headStyle}>{heading}</h1>
    )
}

export const SubHeading=(prop)=>{
    const {heading}=prop
    return (
        <h2>{heading}</h2>
    )
}