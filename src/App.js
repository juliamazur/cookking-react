import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeList/>
        <RecipeForm/>
      </div>
    );
  }
}

export default App;
