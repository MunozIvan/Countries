import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: "40vw",
    height: "40vw",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBTwNYOL1IU5h94st4NnMU9dZ2zb0XXgTg">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5} />
    </LoadScript>
  );
};

export default Map;






