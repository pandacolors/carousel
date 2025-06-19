import * as React from 'react';
import styles from './Carousel.module.scss';
import type { ICarouselProps } from './ICarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Carousel extends React.Component<ICarouselProps> {
  public render(): React.ReactElement<ICarouselProps> {
    const {
      description,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.carousel} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <h3>{escape(description)}</h3>
          <div>{environmentMessage}</div>
        </div>
      </section>
    );
  }
}
