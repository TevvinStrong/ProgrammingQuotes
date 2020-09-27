import React from 'react';
import './App.css';

// Import Quotes
import Quote from "./Components/Quotes.js";

function App() {
  return (
    <div className="App">
      <h1 style={h1Styling}>Programming Quotes</h1>
      <Quote />
    </div>
  );
}

const h1Styling = {
  display: "flex",
  flexWrap: "noWrap",
  justifyContent: "center",
  backgroundColor: "#0083ad",
  color: "white",
  position: "relative",
  padding: "10px",
  margin: "0px",
  fontFamily: "Montserrat, arial",
  letterSpacing: "7px"
}

export default App;
