import React, { Component } from 'react';
import '../assets/styles/components/Carousell.scss';

class Carousell extends Component {
  render() {
    return (
      <section className='carousel'>
        <div className='carousel__container'>
          {this.props.children}
        </div>
      </section>

    );
  }
}

export default Carousell;
