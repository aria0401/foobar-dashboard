import React, { useState, useEffect } from "react";
// import { getData, getBeers } from "../modules/rest";
import { getData, getBeers } from "./modules/rest";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Loader from "../src/components/Loader";

function App(props) {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});
 

  useEffect(() => {
    getData(setData);
    getBeers(setBeers);

    setInterval(() => {
      getData(setData);
    }, 10000);
    getData(setData);
  }, []);

  return (
    <div className="App">
      {!data.bar && <Loader />}
      {data.bar && <Header data={data} />}
      {data.bar && <Main data={data} />}
    </div>
  );
}

export default App;
