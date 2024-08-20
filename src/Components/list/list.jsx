

const CustomList=(prop)=>{
    const {list}=prop
    return (
        <ul>
            {
                list.map( (eachList,index)=>{
                    return (
                        <li key={index}>{eachList}</li>
                    )
                })
            }
        </ul>
    )
}

 export const CustomOrderedList=()=>{
    return (
        <ol>
             <ListItems></ListItems>
        </ol>
    )
}


const ListItems=(prop)=>{

    // {list}=prop
    // return (
    //     {
    //         // list.map(eachItem=>{
    //         //     return (<ul>
    //         //             <li>eachItem</li>
    //         //             </ul>)
    //         // })
    //     } 
        
        
    // )
}
export default CustomList