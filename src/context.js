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
    shoeDetails: shoeListDetails,
    cart: [],
    modalOpen: false,
    modalShoe: shoeListDetails,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setShoes();
  }

  // Loops through shoe list, assigns values of item, makes new set of values, and adds each item to page through CompDidMount()
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

  // Gets details of clicked shoe
  handleDetail = id => {
    const clickedShoe = this.getItem(id);
    this.setState(() => {
      return { shoeDetails: clickedShoe };
    });
  };

  addToCart = id => {
    let tempShoes = [...this.state.shoes]; //Gives access to shoes in state and creates another copy
    const index = tempShoes.indexOf(this.getItem(id)); // Gets index of shoe
    const addedShoe = tempShoes[index]; // Sets addedShoe variable equal to array and specific item index
    addedShoe.inCart = true;
    addedShoe.shoe = 1;
    const price = addedShoe.price;
    addedShoe.total = price;
    this.setState(
      () => {
        return { shoes: tempShoes, cart: [...this.state.cart, addedShoe] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const shoe = this.getItem(id);
    this.setState(() => {
      return { modalShoe: shoe, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Will add and take away items in cart
  increment = id => {
    console.log('increment method');
  };
  decrement = id => {
    console.log('decrement method');
  };

  removeItem = id => {
    console.log('item has been removed');
  };

  clearCart = () => {
    console.log('cart is cleared');
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(shoe => (subTotal += shoe.total));
    const tempTax = subTotal * 0.101;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ShoeContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ShoeContext.Provider>
    );
  }
}

const ShoeConsumer = ShoeContext.Consumer;

export { ShoeProvider, ShoeConsumer };
