import * as React from 'react';
import styles from './Carousel.module.scss';
import type { ICarouselProps } from './ICarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Slider from 'react-slick';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC<ICarouselProps> = (props) => {

  const {
    description,environmentMessage
  } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <section className={styles.carousel}>
      <div className={styles.box}>
        <h3>{escape(description)}</h3>
        <div>{environmentMessage}</div>
      </div>
      <Slider {...settings}>
        <div>Monday</div>
        <div>Tuesday</div>
      </Slider>
    </section>
  );
}

export default Carousel;
