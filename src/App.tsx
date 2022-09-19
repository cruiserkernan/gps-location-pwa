import React from 'react';
import './App.css';
import { useGeolocated } from 'react-geolocated';

function App() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    watchPosition: true,
    onSuccess: (position) => console.log('Got position', position),
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>Accuracy: {coords?.accuracy}</p>
        <p>Latitude: {coords?.latitude}</p>
        <p>Longitude: {coords?.longitude}</p>

      </header>
    </div>
  );
}

export default App;
