import React from 'react';
import './App.css';
import {SubletMap} from "./SubletMap.js"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

require('dotenv').config();

// ...




const testObject = {
  lat: "45.5",
  lng:"-73.57"
}

const testJson = JSON.stringify(testObject);
let id = 0;
const listings = [];

function addMarker(objectListing){
    //const objectListing = JSON.parse(jsonListing);
    console.log(objectListing);
    listings.push(
      <Marker position = {{ lat: parseFloat(objectListing.posn.lat), lng: parseFloat(objectListing.posn.lng)}} key = {id} />
    )
    
}
const getData = async () => {
  try{
    const response = await fetch("/api/listings");
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      //const parsedData = JSON.parse(jsonResponse);
      jsonResponse.forEach(currentListing => {
        console.log(currentListing);
        addMarker(currentListing);
        id++;
      })
    }
    throw new Error("Request failed!");
  }
  catch(error){
    console.log(error);
  }
}
export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {lat : 0,
    lng : 0};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    getData();
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
    this.forceUpdate();
  }

  render(){
    return (  
      
      <div className="App">
        <form>
          <label>
              Enter lat:
              <input
                name="lat"
                type="text"
                value={this.state.lat}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Enter lng:
              <input
                name="lng"
                type="text"
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
          listings = {listings}
        />
      </div>
    );
  }
}



export default App;

