import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="text-center">
      <input
        type="text"
        className="px-5 py-2 text-center rounded-lg border-primary"
        placeholder="Search Countries"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </section>
  );
};

export default Search;
