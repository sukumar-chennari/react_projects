import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data/data'
function CustomCard() {
    
  return (
  
    data.map(eachItem=>{
      return (
        <Card style={{ width: '18rem'  }}>
        <Card.Img variant="top" src={eachItem.image} />
        <Card.Body>
          <Card.Title>{eachItem.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Order Now</Button>
        </Card.Body>
      </Card>
      )
    })
  );
}

export default CustomCard;