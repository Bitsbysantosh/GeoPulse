function App() {
  const getLocation = () => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      });
    };
    return (
    <div>
      <h1>GeoPulse</h1>
    <button onClick={getLocation}>Get My Location</button>
    </div>
  );
}

export default App; 
