import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carosel() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/image1.jpg"}
          alt='First slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/image6.jpg"}
          alt='First slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/image3.jpg"}
          alt='First slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/image5.jpg"}
          alt='Second slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/img12.jpg"}
          alt='Third slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/image2.jpg"}
          alt='Third slide'
        />
    
    
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/img13.jpg"}
          alt='Third slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/*
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/poco.jpg"}
          alt='Third slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={"/images/carousel/jewell.jpg"}
          alt='Third slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}