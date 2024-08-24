import axios from 'axios'
import { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { SquareLoader } from '../loaders/loader'
 import { SubHeading } from '../heading/headings';
import CustomList from '../list/list';

export class Recipe extends Component{
    state={
        loading:true,
        recipes:[]
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData=async ()=>{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")
        console.log(data.recipes)
        if( status==200){
            this.setState({
                recipes:data.recipes,
                loading:false
            })
        }
    }

    render(){
        return(

            <>
            {
                this.state.loading?<SquareLoader></SquareLoader>:<>
                <div style={{display:'flex' , width:'100%' , flexWrap:'wrap', justifyContent:"space-evenly"}}>

                {
                    this.state.recipes.map( eachItem=>{
                        return (
                            <Card style={{ width: '18rem', margin:'5px' }}>
                            <Card.Img variant="top" src={eachItem.image} />
                            <Card.Body>
                              <Card.Title>{eachItem.name}</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <SubHeading heading='Instructions'></SubHeading>
                              <CustomList list={eachItem.instructions}></CustomList>

                              <SubHeading heading='Ingredients'></SubHeading>
                              <CustomList list={eachItem.ingredients}></CustomList>

                              <Button variant="primary">Prepare</Button>
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