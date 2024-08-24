
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
        loader:true
    }
    componentDidMount(){
        this.fetchData()
    }

    fetchData=async ()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products")
        if( status==200){
            this.setState({
                items:data,
                allItems:data,
                loader:false
            })
        }
    }

    mens = () => {
        this.setState({
            items: this.state.items.filter(item => item.category === "men's clothing")
        });
    }
    
    electronics = () => {
        this.setState({
            items: this.state.items.filter(item => item.category === "electronics")
        });
    }
    
    womens = () => {
        this.setState({
            items: this.state.items.filter(item => item.category === "women's clothing")
        });
    }
    
    jewelery = () => {
        this.setState({
            items: this.state.items.filter(item => item.category === "jewelery")
        });
    }
    render(){
        return (
            <>
            {
                this.state.loader?<SquareLoader></SquareLoader>:<>
                    <div style={{textAlign:'center', display:'flex', justifyContent:"center"}}>
                        <button onClick={this.mens}>Men's</button>
                        <button onClick={this.womens}>Ladies</button>
                        <button onClick={this.electronics}>Electronics</button>
                        <button onClick={this.jewelery}>Jewelery</button>
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