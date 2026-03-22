import * as React from 'react';
import styles from './Carousel.module.scss';
import type { ICarouselProps } from './ICarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';

const Carousel:React.FC<ICarouselProps> = (props) => {
  
    const {
      description
    } = props;

    return (
      <section className={styles.carousel}>
        <div className={styles.box}>
          <h1>{escape(description)}</h1>
        </div>
      </section>
    );
  }

  export default Carousel;
