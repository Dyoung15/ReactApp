import React, { Component } from 'react';
import './App.css';
import sk from './images/sk2.jpg';
import Buttons from './Buttons.js';


class App extends Component {
  render() {
    return (
      <div className="App">

<h1>My React Component</h1>

<img src={sk} alt="alt text" />

<h2>Search the hottest brands</h2>

  <div class="ui inverted divider"></div>
    <div class="ui inverted transparent icon input">
      <input type="text" placeholder="Search..."></input>
      <i class="search icon"></i>
    </div>

<Buttons />

      </div>
    );
  }
}

export default App;
