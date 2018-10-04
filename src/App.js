import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Map from './components/Map';
// import Sidebar from './components/SideBar';
//import Menu from './components/Menu';
//import ResponsiveSidebar from './components/ResponsiveSidebar';
//import Toolbar from './components/Toolbar/Toolbar.js';
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//used google-maps-react 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      
      <Marker 
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  <Marker
    name={'Your position'}
    position={{lat: 37.762391, lng: -122.439192}}
    icon={{
      url: "/path/to/custom_icon.png",
      anchor: new window.google.maps.Point(32,32),
      scaledSize: new window.google.maps.Size(64,64)
    }} />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        
        </InfoWindow>

  
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDCNrXEldAgmH2ozJr9gcUybeoiBJqPI2k')
})(MapContainer)