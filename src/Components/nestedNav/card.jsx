import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CustomCard({ data }) {
  return (
    
      <Card style={{ width: "18rem", margin:'10px' }}>
        <Card.Img variant="top" src={data.image} height={250} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success"> <Link to={`/products/${data.id}`} style={{color:'black' , textDecoration:'none'}}>See More</Link> </Button>
        </Card.Body>
      </Card>
      )
  
}

export default CustomCard;
