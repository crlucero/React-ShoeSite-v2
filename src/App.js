import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Details from './components/Details';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Modal from './components/Modal';
import EmptyCart from './components/Cart/EmptyCart';

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
          <Route path="/cart" component={EmptyCart} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
