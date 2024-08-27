import { Component } from "react";
import { Child } from "./child";
//import Child1  from "./child";
import { MemoizedChild1 } from "./child";
class Parent extends Component{
    constructor(){
        super()
        this.state={
            isIndian:false,
        }
    }

    checkFlag=()=>{
        this.setState({
            isIndian: !this.state.isIndian
        })
    }
    render (){
        return(
            <>
                {console.log('parent rendering')}
                {this.state.isIndian?<h1>Welcome Indian</h1>:<h1>Go back from India</h1>}
                <button onClick={()=>this.checkFlag()}>I am Indian</button>
                <Child></Child>
                {/* //<Child1></Child1> */}
                <MemoizedChild1></MemoizedChild1>
                
            </>
        )
    }
}

export {Parent}