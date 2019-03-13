import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map(shoe => {
        return <CartItem key={shoe.id} shoe={shoe} value={value} />;
      })}
    </div>
  );
}
