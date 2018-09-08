import React, { Component } from 'react';
import emoji from './emoji.svg'
import './App.css';
import { Router, Route, Switch } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={emoji} className="App-logo" alt="emoji" />
          <h1 className="App-title">lonelyBKLYN</h1>
        </header>
        <p className="App-intro">
            <h2 className="App-subtitle">We're coming home!</h2>
        </p>
      </div>
    );
  }
}

export default App;
