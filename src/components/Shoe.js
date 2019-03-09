import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoeConsumer } from '../context'; //ShoeConsumer uses data from provider

export default class Shoe extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.shoe;
    return (
      <ShoeWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-4">
        <div className="card">
          <div
            className="img-container p-3"
            onClick={() => console.log('you clicked')}
          >
            <Link to="/details">
              <img src={img} alt="shoe" className="card-img-top" />
            </Link>
            <button
              className="card-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log('added to cart');
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* TODO: Card Footer */}
        </div>
      </ShoeWrapper>
    );
  }
}

const ShoeWrapper = styled.div``;
