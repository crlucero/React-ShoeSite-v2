import React, { Component } from 'react';
import Title from './Title';
import Shoe from './Shoe';
import { ShoeConsumer } from '../context'; //ShoeConsumer uses data from provider

export default class ShoeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="New" title="Arrivals" />
            <div className="row">
              <ShoeConsumer>
                {/* Grabs value from context.js */}
                {value => {
                  return value.shoes.map(shoe => {
                    return <Shoe key={shoe.id} shoe={shoe} />;
                  });
                }}
              </ShoeConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
