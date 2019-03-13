import React, { Component } from 'react';

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center p-2 d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="cart-titles text-uppercase">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="cart-titles text-uppercase">name of shoe</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className=" cart-titles text-uppercase">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="cart-titles text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="cart-titles text-uppercase">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="cart-titles text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}
