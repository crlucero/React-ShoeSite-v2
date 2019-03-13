import React from 'react';

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="title col-10 mx-auto text-center text-title">
        <h1 className="my-2 text-uppercase font-weight-medium">
          {name} <strong className="text-grey">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
