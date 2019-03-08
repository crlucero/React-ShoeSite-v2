import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm justify-content-between navbar-dark px-sm-5">
          <Link to="/" className="navbar-brand">
            <i class="fas fa-crown" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-items ml-5">
              <Link to="/" className="nav-link">
                New Arrivals
              </Link>
            </li>
            <li className="nav-items ml-5">
              <Link to="upcoming" className="nav-link">
                Upcoming
              </Link>
            </li>
            <li className="nav-items ml-5">
              <Link to="wanted" className="nav-link">
                Wanted
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              Cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainRed);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
`;
