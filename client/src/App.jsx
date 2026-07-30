import {MapContainer, TileLayer, 
Marker, Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
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
  const [locations, setLocations] = useState([]);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position.coords);

        fetch("http://localhost:5000/api/location", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      } 
    );
  };

   useEffect(() => {
    fetch("http://localhost:5000/api/location")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
    }, []);
  


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
      {locations.map((item) => (
        <Marker
          key={item._id}
          position={[item.latitude, item.longitude]}
        >
          <Popup>
           saved Location
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default App; 
