import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Details from './components/Details';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import Error404 from './components/Error404';

class App extends Component {
  render() {
    return (
      // React Fragment simulates HTML tags. Works as container
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={ShoeList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Error404} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
