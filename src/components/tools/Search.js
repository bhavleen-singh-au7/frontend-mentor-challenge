import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="d-flex justify-content-between">
      <div className="py-2 shadow-sm">
        <form className="form-inline mx-5 pr-5">
          <i className="fas fa-search text-muted"></i>
          <input
            className="form-control form-control-sm ml-3 border-0 pr-5 mySearch"
            type="text"
            placeholder="Search for a countries"
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </div>

      <div className="dropdown shadow-sm">
        <button
          className="btn dropdown-toggle px-4"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter By Region{" "}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenu2"
        >
          <button className="dropdown-item" type="button">
            Comming Soon
          </button>
          <button className="dropdown-item" type="button">
            Comming Soon1
          </button>
          <button className="dropdown-item" type="button">
            Comming Soon2
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
