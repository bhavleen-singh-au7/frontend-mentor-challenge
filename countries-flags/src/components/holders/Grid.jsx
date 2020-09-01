import React from 'react';
import Item from "./Item";
import Spinner from "../tools/Spinner";

const Grid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
      <div className="row row-cols-2 row-cols-md-4">
        {items.map(item => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    );
};

export default Grid;
