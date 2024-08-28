import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({ data, text, sendDataToParent ,  width= '18rem', border='2px solid', margin='2px' , height=''}) {
  const sendData = (id) => {
    sendDataToParent(id); // Passing the item ID to the parent
  };

  return (
    data.map(eachItem => (
      <Card style={{ width: width, border: border, margin: margin}} key={eachItem.id}>
        <Card.Img variant="top" src={eachItem.image} style={{height:height}} />
        <Card.Body>
          <Card.Title>{eachItem.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => sendData(eachItem.id)}>
            {text}
          </Button>
        </Card.Body>
      </Card>
    ))
  );
}

export default MyCard;
