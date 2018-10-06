import React, { Component } from 'react';
import './Map.css';
import axios from 'axios';

class Map extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues();
  }

  renderMap = () => {
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDCNrXEldAgmH2ozJr9gcUybeoiBJqPI2k&callback=initMap')
    window.initMap = this.initMap
  }
// Get venues from FourSquare API in React App using Axios
//Source: https://www.youtube.com/watch?v=dAhMIF0fNpo

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "TJNBOWFRAENKF0VQSTZ0UNSBW4XHQER3WZJUAZ25JVKS3FXG",
      client_secret: "3G1K42W4GL4FO2S5H2GQYXVSWIJHTI0UX00F4SF5HZICSVQK",
      query: "food",
      near: "Sydney",
      v: "20180510"
    }
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      console.log("ERROR" + error)
    })
  }

  initMap = () => {
        // Constructor creates a new map - only center and zoom are required.

        var map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        })

        this.state.venues.map(myVenue => {
          var marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
            map: map,
            title: myVenue.venue.name
          }) 

        })
            
      }

  
loadScript = (url) => {
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }


  render() {
    return (
      <div id='map'>
        
      </div>
    );
  }
}


export default Map;