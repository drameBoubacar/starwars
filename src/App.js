import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Header/>
      </div>
    );
  }
}

export default App;
