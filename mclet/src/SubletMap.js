import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



export const SubletMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 45.50, lng: -73.57 }}
  >
    {props.listings}
    {props.isMarkerShown }
  </GoogleMap>
))



