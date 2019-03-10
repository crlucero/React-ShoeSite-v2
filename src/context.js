// Context API allows you to avoid 'prop drilling'
// when trying to get data to different
// parts of comp tree.

// Provider - provides all info for application
// Consumer - use consumer when we want to use info from provider

import React, { Component } from 'react';
import { shoeList, shoeListDetails } from './data';

const ShoeContext = React.createContext();

class ShoeProvider extends Component {
  state = {
    shoes: [],
    shoeDetails: shoeListDetails
  };

  componentDidMount() {
    this.setShoes();
  }

  setShoes = () => {
    let tempShoes = [];
    shoeList.forEach(item => {
      const singleItem = { ...item };
      tempShoes = [...tempShoes, singleItem];
    });
    this.setState(() => {
      return { shoes: tempShoes };
    });
  };

  getItem = id => {
    const clickedShoe = this.state.shoes.find(item => item.id === id);
    return clickedShoe;
  };

  handleDetail = id => {
    const clickedShoe = this.getItem(id);
    this.setState(() => {
      return { shoeDetails: clickedShoe };
    });
  };
  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  render() {
    return (
      <ShoeContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ShoeContext.Provider>
    );
  }
}

const ShoeConsumer = ShoeContext.Consumer;

export { ShoeProvider, ShoeConsumer };
