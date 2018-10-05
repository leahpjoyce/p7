import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Map />
        <Sidebar />
        
        
      </div>
    );
  }
}

export default App;