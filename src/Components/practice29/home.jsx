import { IoPersonSharp } from "react-icons/io5";
import { PiMaskHappy } from "react-icons/pi";

import { Component } from "react";
import { RotatingSquare } from "react-loader-spinner";
import axios from "axios";
import './buttonstyle.css'
import { CustomImage } from "../image/image";
import { CustomeTable } from "../table/table";

export class Home extends Component{
    constructor(){
        super()
        this.state={
            flag:false,
            loader:true,
            items:[],
            showTable:false,
            singleItem:{}
        }
    }

    homeHandler=()=>{
        this.setState({
            showTable:true
        })
    }

    addData=(id)=>{
        const tempArray=[...this.state.items,this.state.singleItem]
        this.setState({
            items:tempArray
        })
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=async ()=>{
        try{
            let {data,status}=await axios.get('https://fakestoreapi.com/products')
            if(status===200){
                // console.log(data)
                this.setState({
                    loader:false,
                    items:data,
                    singleItem:data[0]
                })
            }
        }
        catch(errror){
            console.log('Data not fetched')
        }
    }

    render(){
        return(
            <>
                {this.state.loader?<RotatingSquare/>:<>
                    <div style={{width:'100%', border:'1px solid', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                        <PiMaskHappy  style={{fontSize:'80px'}}/>
                        
                        <h1>Haku na matata</h1>

                        <IoPersonSharp  style={{fontSize:'40px'}}/>

                    </div>
                    
                    <div style={{width:'100vw', border:'1px solid', height:'80vh' , display:'flex'}}>
                        <div style={{border:'1px solid', width:'200px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <button className="homeButton" onClick={this.homeHandler} >Home</button>
                            <button className="homeButton">About</button>
                            <button className="homeButton">Conctact</button>
                        </div>
                        <div style={{border:'1px solid', height:'100%', overflow:'scroll'}}> 
                            <button style={{position:'fixed', marginTop:'-30px'}} onClick={this.addData}>{'Add Item'}</button>
                           {this.state.showTable?<CustomeTable  data={this.state.items} th={this.state.items}/>:<RotatingSquare/>}
                        </div>
                    </div>
                </>
                }
            </>
        )
    }
}