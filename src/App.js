import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
      </div>
    );
  }
}

export default App;
