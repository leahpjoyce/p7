import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SquareAPI from './API';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';


class App extends Component {

    constructor() {
      super();
      this.state = {
          venues: [],
          markers: [],
          center: [],
          zoom: 12
      }
    }

    componentDidMount() {
      SquareAPI.search({
        near: "Austin, TX",
        query: "tacos",
        limit: 10
      }).then(results => {
        const {venues} = results.response;
        const {center} = results.response.geocode.feature.geometry;
        console.log(results)
      });
    
  }
  
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