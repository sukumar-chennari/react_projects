
import axios from "axios";
import { Component } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { SquareLoader } from '../loaders/loader'
 import { SubHeading } from '../heading/headings';


class FakeStore extends Component{

    state={
        items:[],
        allItems:[],
        loader:true,
        category:[]
    }
    componentDidMount(){
        this.fetchData(),
        this.fetchCatogories()
    }

    fetchData=async ()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products")
        if( status==200){
            this.setState({
                items:data,
                allItems:data,
                loader:false,
                
            })
        }
    }

    fetchCatogories=async ( eac)=>{
        const {data}=await axios.get("https://fakestoreapi.com/products/categories")

        this.setState({
            category:data
        })
    }

    filterData= async (eachCategory)=>{
        if(this.state.category.includes(eachCategory)){
            const {data}=await axios.get(`https://fakestoreapi.com/products/category/${eachCategory}`)
            this.setState({
                items:data
            })
        }
        else{
            this.setState({
                items:this.state.allItems
            })
        }
    }

 
    render(){
        return (
            <>
            {
                this.state.loader?<SquareLoader></SquareLoader>:<>
                    <div style={{textAlign:'center', display:'flex', justifyContent:"center"}}>
                        {
                            this.state.category.map(eachCategory=>{
                                return (<button onClick={ ()=>{this.filterData(eachCategory)}}>{eachCategory}</button>)
                            })
                        }
                        
                    </div>
                    <div style={{display:'flex' , width:'100%' , flexWrap:'wrap', justifyContent:"space-evenly"}}>

                    {
                        this.state.items.map( eachItem=>{
                                return (
                                    <Card style={{ width: '18rem', margin:'5px' }} key={eachItem.id}>
                                    <Card.Img variant="top" src={eachItem.image} style={{height:'300px'}} />
                                    <Card.Body>
                                    <Card.Title>{eachItem.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>

                                    <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                    </Card>
                                )
                            })
                    }
                    </div>
                </>
    }
            </>
        )
    }
}

export {FakeStore} 