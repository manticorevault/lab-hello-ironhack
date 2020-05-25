import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
