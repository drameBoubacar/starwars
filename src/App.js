import React, { Component } from 'react';
// import NavBar from './components/NavBar';
import Header from './components/Header';
import GameArticle from './components/GameArticle';
import SectionImage from './components/SectionImage';
import DarkVador from './components/DarkVador';
import TopFooter from './components/TopFooter';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <Header/>
        <GameArticle/>
        <SectionImage/>
        <DarkVador/>
        <TopFooter/>
        <Footer/>
      </div>
    );
  }
}

export default App;
