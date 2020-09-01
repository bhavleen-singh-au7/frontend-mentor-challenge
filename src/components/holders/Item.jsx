import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="col my-4 shadow">
      <div className="card h-100">
        <img src={item.flag} className="card-img-top" alt="flags" />
        <div className="card-body">
          <h2 className="card-title text-center"><ins>{item.name}</ins></h2>
          <ul className="card-text">
            <li><strong>Capital</strong>: {item.capital}</li>
            <li><strong>Region</strong>: {item.region}</li>
            <li><strong>Language</strong>: {item.languages[0].name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
