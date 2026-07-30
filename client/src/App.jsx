import {MapContainer, TileLayer, 
Marker, Popup, useMap } from 'react-leaflet';
import { useState } from 'react';
function LocationMarker({ location }) {
  const map = useMap();
  if (!location) {
    return null;
  }
  console.log(map);
  map.setView([location.latitude, location.longitude], 15);
  return (
    <Marker position={[location.latitude, location.longitude]}>
      <Popup>
        You are here: {location.latitude}, {location.longitude}
      </Popup>
    </Marker>
  );
}

function App() {
  const [location, setLocation] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position.coords);
      }
    );
    };
    return (
    <div>
      <h1>GeoPulse</h1>
    <button onClick={getLocation}>Get My Location</button>
    <MapContainer 
     center={[20.5937, 78.9629]}
             zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker location={location} />
    </MapContainer>
    </div>
  );
}

export default App; 
