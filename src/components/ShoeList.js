import React, { Component } from 'react';
import Title from './Title';
import { shoeList } from '../data';

export default class ShoeList extends Component {
  state = {
    shoes: shoeList
  };

  render() {
    console.log(this.state.shoes);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="New" title="Arrivals" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
      // <Shoe />
    );
  }
}
