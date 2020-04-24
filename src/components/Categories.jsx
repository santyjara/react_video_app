import React, { Component } from 'react';
import '../assets/styles/components/Categories.scss';

class Categories extends Component {

  render() {
    const { title, children } = this.props;
    return (
      <div className='categories'>
        <h3 className='categories__title'>{title}</h3>
        {children}
      </div>
    );
  }
}

export default Categories;

