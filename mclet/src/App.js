import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SubletMap} from "./SubletMap.js"
// ...
/*
    handleNew(newMarker){
        const newListing = JSON.parse(newMarker);
        const listMarker = <div><Marker
                            name={newListing.name}
                            position={{lat: newListing.lat, lng: newListing.lng}} />
                            <Marker /></div>
        
        const currListing = this.state.listings;
        currListing.push(listMarker);
        this.setState({listings : currListing});
    }*/



export class App extends React.Component{
  render(){
    return (  
      <div className="App">
        <SubletMap/>
      </div>
    );
  
  }
  
  
}




export default App;

