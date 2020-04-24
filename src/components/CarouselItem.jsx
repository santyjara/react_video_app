import React, { Component } from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

import PropTypes from 'prop-types';

class CarouselItem extends Component {

  render() {

    const { title, cover, year, contentRating, duration } = this.props;

    return (

      <div className='carousel-item'>
        <img
          className='carousel-item__img'
          src={cover}
          alt={title}
        />
        <div className='carousel-item__details'>
          <div>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
            <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
          </div>
          <p className='carousel-item__details--title'>{title}</p>
          <p className='carousel-item__details--subtitle'>
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  cover: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRating: PropTypes.string,
};

export default CarouselItem;
