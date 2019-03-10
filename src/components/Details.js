import React, { Component } from 'react';
import { ShoeConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ShoeConsumer>
        {value => {
          const { id, title, img, price, info, inCart } = value.shoeDetails;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title text-grey my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="shoe" />
                  <div>
                    <Link to="/">
                      <button className="button-group">WANT</button>
                    </Link>
                    <button
                      className="button-group"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? 'IN CART' : 'ADD TO CART'}
                    </button>
                  </div>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4 className="text-red">
                    <strong className="text-red">
                      Price:
                      <span> $</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-title font-weight-medium mt-3 mb-0">
                    {info}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ShoeConsumer>
    );
  }
}

// {value => {
//   console.log(value.shoeDetails);
// }}
