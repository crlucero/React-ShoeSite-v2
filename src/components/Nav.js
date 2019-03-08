import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-danger justify-content-between navbar-dark px-sm-5">
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
            <button>
              <i className="fas fa-cart-plus" />
              Cart
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
