import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ShoeConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ShoeConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="cart" title="summary" />
                  <hr />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value />}
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ShoeConsumer>
      </section>
    );
  }
}
