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
    addedShoe.count = 1;
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
    let tempCart = [...this.state.cart];
    //return if shoe id is matching id that i'm passing (adding)
    const selectedShoe = tempCart.find(shoe => shoe.id === id);

    //Finds index to selected shoe, and uses index to find that shoe
    const index = tempCart.indexOf(selectedShoe);
    const shoe = tempCart[index];

    shoe.count = shoe.count + 1;
    shoe.total = shoe.count * shoe.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    //return if shoe id is matching id that i'm passing (adding)
    const selectedShoe = tempCart.find(shoe => shoe.id === id);

    //Finds index to selected shoe, and uses index to find that shoe
    const index = tempCart.indexOf(selectedShoe);
    const shoe = tempCart[index];

    shoe.count = shoe.count - 1;

    if (shoe.count === 0) {
      this.removeItem(id);
    } else {
      shoe.total = shoe.count * shoe.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    // Gives access to shoes in cart
    let tempShoes = [...this.state.shoes];
    let tempCart = [...this.state.cart];

    // Filter cart and return only items that don't match ID
    tempCart = tempCart.filter(shoe => shoe.id !== id);

    const index = tempShoes.indexOf(this.getItem(id));
    let deletedShoe = tempShoes[index];
    deletedShoe.inCart = false;
    deletedShoe.count = 0;
    deletedShoe.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          shoes: [...tempShoes]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Sets cart to empy array
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        // Gives new copy of origianl shoe list
        this.setShoes();
        this.addTotals();
      }
    );
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
