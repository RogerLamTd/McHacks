import React from 'react';
import './App.css';
import {SubletMap} from "./SubletMap.js"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

require('dotenv').config();

// ...
const addMarker = (jsonListing) => {
  const objectListing = JSON.parse(jsonListing);
  newListings.push(
    <Marker position = {{ lat: objectListing.lat, lng: objectListing.lng}} />
  )
};

const newListings = [];
const testObject = {
  lat: 45.5,
  lng:-73.57
}

const testJson = JSON.stringify(testObject);
addMarker(testJson);


export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {lat : 0,
    lng : 0};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  handleClick(){
    let newObject = {
      lat : this.state.lat,
      lng : this.state.lng
    }

    addMarker(JSON.stringify(newObject));
  }

  render(){
    return (  
      <div className="App">
        <form>
          <label>
              Enter lat:
              <input
                name="lat"
                type="number"
                value={this.state.lat}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Enter lng:
              <input
                name="lng"
                type="number"
                value={this.state.lng}
                onChange={this.handleInputChange} />
            </label>
        </form>
        <button onClick = {this.handleClick}>submit</button>
         
        <SubletMap
          isMarkerShown
          googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_MAP_KEY}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          listings = {newListings}
        />
      </div>
    );
  }
}



export default App;

