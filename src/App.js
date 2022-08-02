import React from "react";
import "./App.css";
import GetQuote from "./component/GetQuote";
import AddQuote from "./component/AddQuote";

function App() {
  return (
    <div className="App">
      <div className="api-links">
        <a href="https://kanye.rest">API SITE</a>
      </div>
      <GetQuote />
      <AddQuote />
    </div>
  );
}

export default App;
