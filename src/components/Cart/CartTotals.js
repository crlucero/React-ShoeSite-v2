import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-uppercase text-right">
            <Link to="/cart">
              <button
                className="btn btn-outline-dark text-uppercase mb-3"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text title">subtotal:</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text title">Tax:</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text title">Cart Total:</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
