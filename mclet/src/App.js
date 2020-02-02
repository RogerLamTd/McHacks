import React from 'react';
import './App.css';
import {SubletMap} from "./SubletMap.js"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

require('dotenv').config();

// ...
let id = 0;
const listings = [];

function addMarker(objectListing){
    //const objectListing = JSON.parse(jsonListing);
    console.log(objectListing);
    listings.push(
      <Marker position = {{ lat: parseFloat(objectListing.posn.lat), lng: parseFloat(objectListing.posn.lng) }} key = {id} />
    )
    
}
const getData = async () => {
  try{
    const response = await fetch("/api/listings");
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      //const parsedData = JSON.parse(jsonResponse);
        if(Array.isArray(jsonResponse)){
          jsonResponse.forEach(currentListing => {
          console.log(currentListing);
          addMarker(currentListing);
          id++;
          })
        }
        else{
          addMarker(jsonResponse);
          id++;
        }
        return;
      
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
    getData();
    
  }

  render(){
    return (  
      <div className="App">
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

