import React, { Component } from 'react';
import './Map.css';

class Map extends Component {

    markers = [];

    onLoad = () => {

        //empty object to use on demand
        const current = {};
        this.current = current;
 

        //define default attributes and starting point for map
        this.map = new window.google.maps.Map(
            document.getElementById('map'), {
                center: {lat: 39.7684,
                    lng: -86.1581},
                zoom: 11
            }
            
        );

        const infowindow = new window.google.maps.InfoWindow({
            maxWidth: 300   
        });


        this.infowindow = infowindow;
        
        // close one infowindow when another one opens
        window.google.maps.event.addListener(infowindow, 'closeclick', function () {
            current.marker = false;
        });

        window.google.maps.event.addListener(this.map, 'click', function () {
            current.marker = false;
            infowindow.close();
        });
    }

    // markers method
    handleClickMarker = () => {
        const self = this;
        const {showingLocations, currentMarker, markerClicked } = this.props;

   
        while (this.markers.length) {
            this.markers.pop().setMap(null);
        }

        showingLocations.forEach(configVenue => {

         
            const position = {
                lat: configVenue.venue.location.lat,
                lng: configVenue.venue.location.lng
            }


            //define marker
            const marker = new window.google.maps.Marker({
                position: position,
                map: this.map,
                title: configVenue.venue.name,
                address: configVenue.venue.location.address,
                id: configVenue.venue.id,
            });

            // push each new marker into the empty array of markers
            this.markers.push(marker);

            window.google.maps.event.addListener(marker, 'click', function () {
                markerClicked(configVenue.venue.id);
            });

            // show marker infowindow is selected
            if (currentMarker === configVenue.venue.id){
                self.current.marker = marker;
                self.infowindow.setContent(marker.title + ' ' + marker.address);
                self.infowindow.open(self.map, marker);
            }

        });
    }

    //invoke markers method immediately after update occurs, to be able to display them
    componentDidUpdate() {
        this.handleClickMarker();
    }


    //When DOM loads, initialize Google Map
    componentDidMount() {
        if (!window.google) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDCNrXEldAgmH2ozJr9gcUybeoiBJqPI2k`;
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onLoad();
            })
        } else {
            this.onScriptLoad();
        }
    }

    render() {
        return (
            <div id='map' role='application'>
            </div>

        );
    }
}

export default Map;