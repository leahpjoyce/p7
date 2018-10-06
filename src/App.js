import React, { Component } from 'react';
import './App.css';
import SquareAPI from './API';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';
import escapeRegExp from 'escape-string-regexp';


class App extends Component {

  state = {
    venues: [],
    showingLocations: '',
    query: '',
    marker: {},
    currentMarker: undefined
  }

  componentDidMount() {
    this.getVenues();
  }

  updateQuery = query => {
    this.setState({ query })
  }

  onMarkerClick = marker => {
    this.setState({ currentMarker: marker })
  }

  openNav()  {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("navbar").focus();
  }

  closeNav() {
      document.getElementById("navbar").style.width = "0";
      document.getElementById('map-area').focus();
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
      near: "Indiana",
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
          center: {lat: 39.7684, lng: -86.1581},
          zoom: 11
        })

              
        //Create Infowindow
        var infowindow = new window.google.maps.InfoWindow();

        //Display dynamic markers
        this.state.venues.map(myVenue => {

          var contentString = `${myVenue.venue.name}`

          
          //Create a Marker
          var marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
            map: map,
            title: myVenue.venue.name
          }) 

          // Open infowindow
          marker.addListener('click', function() {

            infowindow.setContent(contentString)

            infowindow.open(map, marker);
          });

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
    let showingLocations

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingLocations = this.state.venues.filter((venue) => match.test(venue.venue.name))
    } else {
      showingLocations = this.state.venues
    }


    return (
      <div>
     
        <Header />
        <Map 
        showingLocations={showingLocations}
        markerClicked={this.onMarkerClick}
        currentMarker={this.state.currentMarker}
        />
        <Sidebar
        getVenues={this.getVenues}
        closeNavbar={this.closeNav}
        venues={this.state.venues}
        query={this.state.query}
        showingLocations={showingLocations}
        updateQuery={this.updateQuery}
        markerClicked={this.onMarkerClick}
        />
     
        
      </div>
    );
  }
}

export default App;