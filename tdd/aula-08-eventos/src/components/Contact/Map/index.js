import React from "react";
import { LoadScript, GoogleMap } from "react-google-maps";

const Map = ({ center }) => (
  <LoadScript id="script-loader" googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap id="example-map" center={center} />
  </LoadScript>
);

export default Map;
