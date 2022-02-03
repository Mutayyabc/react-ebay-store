import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Carousel.css";

function CarouselContainer() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="carousel_slide w-100"
      src="https://cdn.mos.cms.futurecdn.net/ANpwjURmi6tEcVLauTipv8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Best Deals on Your Shopping List</h3>
      <p>Buy now to capture the perfect moment.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel_slide w-100"
      src="https://i.pcmag.com/imagery/articles/01WVro2Jq0euoTa30C5pj4Y-27..v1638889630.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>We've Got a Feeling You'll Love These</h3>
      <p>Save on new watches</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel_slide w-100"
      src="https://cdn.shopify.com/s/files/1/0008/4960/8761/products/DSC00055-Edit_1200x.jpg?v=1636703060"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Skin Product Finds</h3>
      <p>Grab skin care products and much more.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselContainer
