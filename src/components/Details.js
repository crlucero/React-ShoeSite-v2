import React, { Component } from 'react';
import { ShoeConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ShoeConsumer>
        {value => {
          const { id, title, img, price, info } = value.shoeDetails;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title text-grey my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="shoe" />
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
                  <div>
                    <Link to="/">
                      <ButtonContainer className="button-group">
                        Back to New Arrivals{' '}
                      </ButtonContainer>
                    </Link>
                  </div>
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
