import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpeg';

const CarouselContainer = () => {
  return (
    <Carousel style={{ marginBottom: "10px" }} fade={true} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Забронируйте курс английского языка до 1 сентябпя 2021 года и получите СКИДКУ:</h1>
          <p>Курс до 8 недель – СКИДКА 30%
            Курс от 8 недель – CКИДКА 15%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Забронируйте курс английского языка до 1 сентябпя 2021 года и получите СКИДКУ:</h1>
          <p>Курс до 8 недель – СКИДКА 30%
            Курс от 8 недель – CКИДКА 15%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Забронируйте курс английского языка до 1 сентябпя 2021 года и получите СКИДКУ:</h1>
          <p>Курс до 8 недель – СКИДКА 30%
            Курс от 8 недель – CКИДКА 15%</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
