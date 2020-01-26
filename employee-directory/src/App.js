import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import NextComponent from "./components/NextComponent";

function App() {
  return (
    <div className="table">
      {/* <Table />
      <Results />
      <SearchBar /> */}
      <NextComponent />
    </div>
  );
}

export default App;
