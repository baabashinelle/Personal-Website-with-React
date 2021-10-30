import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Baaba D </title>
        <link rel="canonical" href="" />
        <meta name="description" content="Personal Website" />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
