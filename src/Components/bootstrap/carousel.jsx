import Carousel from 'react-bootstrap/Carousel';
import data from "../../data/data"

function CustomCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      {
        data.map(eachItem=>{
          return(
          <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-50 h-75 mx-auto "
          src={eachItem.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{eachItem.name}</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
      

    </Carousel>
  );
}

export default CustomCarousel;