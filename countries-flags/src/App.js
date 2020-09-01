import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./components/tools/Search";
import Grid from "./components/holders/Grid";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/name/${query}`);

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);

    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <h1 className="text-light text-center my-4"><ins>Frontend Mentor Challenge</ins></h1>
      <Search getQuery={(q) => setQuery(q)} />
      <Grid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
