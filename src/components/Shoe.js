import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoeConsumer } from '../context'; //ShoeConsumer uses data from provider
import PropTypes from 'prop-types';

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
              className="cart-btn"
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
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-red font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ShoeWrapper>
    );
  }
}

Shoe.propTypes = {
  shoe: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

// Styled Component
const ShoeWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.04 rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 8px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: transparent;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.1rem 0.3rem;
    background: var(--mainRed);
    border: none;
    font-size: 0.9rem;
    color: var(--mainWhite);
    border-radius: 0 0.5rem 0 0;
    transform: translate(-100%, 100%);
    transition: all 0.5s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainDark);
    cursor: pointer;
  }
`;
