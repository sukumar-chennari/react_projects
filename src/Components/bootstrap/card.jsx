  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import data from '../../data/data'
  import CustomHeart from '../input/heart/heart';

  import { SquareLoader } from '../loaders/loader';
  import { CustomToast } from '../toaster/toast';
  import { CustomButton } from '../button/button';
  import { successToast } from '../toaster/toast-helpers';
  import { Component } from 'react';


  export class CustomCard extends Component{
    state={
      items:[]
    }

    addObjs=()=>{
      const finalArray=[...this.state.items, ...data]
      this.setState({
        items:finalArray,
      })
    }

    deleteCard = (itemToDelete) => {
      this.setState({
        items: this.state.items.filter(item => item !== itemToDelete),
      });
    };


    render(){
      return (
        <>
      <div style={{display:'block', width:'100%'}}>
          <button onClick={this.addObjs}> Add to card</button>
        </div>
          
        <div style={ {display:'flex', flexWrap:'wrap' , width:'100%', height:'max-content', border:'1px solid'}}>
          
        {
            
            this.state.items.map( (eachItem,i)=>{
              return (
                
                   <Card style={{ width: '18rem', margin:'5px'} }>
                  <Card.Img variant="top" src={eachItem.image}/>
                  <Card.Body>
                    <Card.Title>{eachItem.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.deleteCard(eachItem)}>Delete Item</Button>
                  </Card.Body>
                </Card>
                
               
              );
            })
          }
        </div>
        </>
        
    
        
      )
    }
  }
  export default CustomCard;