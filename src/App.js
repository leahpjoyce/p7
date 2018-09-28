import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/SideBar';


class App extends Component {

  render() {
    return (
      <div>
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;