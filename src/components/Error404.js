import React, { Component } from 'react';

export default class Error404 extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1 className="display-3">404</h1>
            <h2>Error</h2>
            <h3>Page Not Found</h3>
            <h4>
              The URL pathname
              <span className="text-danger">
                '{this.props.location.pathname}'
              </span>
              was not found
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
