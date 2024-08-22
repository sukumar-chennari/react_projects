import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data/data'
import CustomHeart from '../input/heart/heart';

import { SquareLoader } from '../loaders/loader';
import { CustomToast } from '../toaster/toast';
function CustomCard() {
    
  return (
  
    data.map(eachItem=>{
      return (
        <Card style={{ width: '18rem'  }}>
        <Card.Img variant="top" src={eachItem.image} />
        <Card.Body>
          <Card.Title>{eachItem.name}</Card.Title>
          <SquareLoader visible={true} height="100" width="100" color="blue"></SquareLoader>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <Button style={{height:'50px', border:'2px solid'}} variant="primary">Order Now</Button>
            <CustomHeart ></CustomHeart>
          </div>
          <CustomToast></CustomToast>
          
        </Card.Body>
      </Card>
      )
    })
  );
}

export default CustomCard;