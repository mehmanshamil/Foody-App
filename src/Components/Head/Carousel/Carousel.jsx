import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from "../Head.module.css";
// photo
import photo1 from "../../../Components/Image/hero_2.jpg";
import photo2 from "../../../Components/Image/Yemek-Menü-Fotoğrafçisi.jpg";
import photo3 from "../../../Components/Image/yemek-fotografi-cekim-teknikleri.jpg";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={`${styles.carouselimg} d-block w-100`}
          src={photo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.carouselimg} d-block w-100`}
          src={photo2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.carouselimg} d-block w-100`}
          src={photo3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
