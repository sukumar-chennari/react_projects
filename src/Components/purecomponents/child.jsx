import React, { Component, PureComponent } from "react";

export class Child extends PureComponent{
    render(){
        return(
            <>
                {console.log('child component')}
            </>
        )
    }
}

const Child1=()=>{
    return (
        <>
            {console.log('child 1 functional component')}
        </>
    )
}

//export default React.memo(Child1)  //this paterns is hight order components

export const MemoizedChild1=React.memo(Child1)

