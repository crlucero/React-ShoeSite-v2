import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">col 1</div>
          <div className="col-6">col 1</div>
          <span>
            <i className="fas fa-home" />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
