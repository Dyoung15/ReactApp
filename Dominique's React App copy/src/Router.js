import React, { Component } from 'react';
import './App.css';
import {
BrowserRouter as Router,
Route,
Link

} from 'react-router-dom'


class Buttons extends Component {
  render() {
    return (
      <div className="App">

<button className="button">Submit</button>

      </div>
    );
  }
}

export default Buttons;
