import React from 'react';
import GoogleMapReact from 'google-map-react';
require('dotenv').config();

export class SubletMap extends React.Component {
  
    
    static defaultProps = {
        center: {
            lat: 45.50,
            lng: -73.57
        },
        zoom: 15
    };

    render() {
        return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
        </div>
        );
    }
}

