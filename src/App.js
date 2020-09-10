import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Search from "./components/tools/Search";
import Grid from "./components/holders/Grid";
import Navbar from "./components/tools/Navbar";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2?name/${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Search getQuery={(q) => setQuery(q)} />
        <Grid isLoading={isLoading} items={items} />
      </div>
    </Fragment>
  );
}

export default App;
