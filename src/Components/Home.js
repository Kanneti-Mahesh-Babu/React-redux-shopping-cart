import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import ban1 from './Images/ban1.jpg'
import ban2 from './Images/ban2.jpg'
import ban3 from './Images/ban3.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <Navbar />


    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban1}
          alt="First slide"  style={{height:"550px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban2}
          alt="Second slide" style={{height:"550px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban3}
          alt="Third slide" style={{height:"550px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    <Products />
    </div>
  );
}

export default Home;
