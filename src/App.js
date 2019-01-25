import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import GameArticle from './components/GameArticle';
import SectionImage from './components/SectionImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Header/>
      <GameArticle/>
      <SectionImage/>
      </div>
    );
  }
}

export default App;
