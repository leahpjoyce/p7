import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDCNrXEldAgmH2ozJr9gcUybeoiBJqPI2k&callback=initMap')
    window.initMap = this.initMap
  }


  initMap = () => {
        // Constructor creates a new map - only center and zoom are required.
      const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13
        });
        var tribeca = {lat: 40.719526, lng: -74.0089934};
        var marker = new window.google.maps.Marker({
          position: tribeca,
          map: map,
          title: 'First Marker!'
        });
      }



  render() {
    return (
      <div id='map'>

      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
