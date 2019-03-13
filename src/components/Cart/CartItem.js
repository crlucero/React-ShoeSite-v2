import React from 'react';

export default function CartItem({ shoe, value }) {
  const { id, title, img, price, total, count } = shoe;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 p-2 text-uppercase text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: '8rem', height: '6rem' }}
          className="img-fluid"
          alt="shoes"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Shoe : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* End of button column */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item Total: $ {total} </strong>
      </div>
      <hr />
    </div>
  );
}
