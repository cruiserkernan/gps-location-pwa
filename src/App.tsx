import React from 'react';
import './App.css';
import { useGeolocated } from 'react-geolocated';
import { Circle, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
const mapsApiKey = "AIzaSyDtm9RKuYkzVuDTvTFeOes4feNo4Yrgz-s";
function App() {
  const [center, setCenter] = React.useState({ lat: 59.26, lng: 15.20 });
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    watchPosition: true,
    onSuccess: (position) => setCenter({ lat: position.coords.latitude, lng: position.coords.longitude }),
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiKey
  });



  const a = [center];

  return (
    <div className="App" >
      <header className="App-header">
        <p>Accuracy: {coords?.accuracy}</p>
        <p>Latitude: {coords?.latitude}</p>
        <p>Longitude: {coords?.longitude}</p>
        {
          isLoaded ? (

            <GoogleMap
              center={center}
              zoom={10}
              mapContainerStyle={{
                height: "400px",
                width: "800px"
              }}
            >
              <>
                <Circle center={center} radius={coords?.accuracy ?? 10} />
                {
                  a.map((item, index) => {
                    return <Marker
                      key={index}
                      position={item}
                    />
                  })
                }
              </>
            </GoogleMap>
          ) : <p>Loading...</p>
        }
      </header>
    </div >
  );
}

export default App;
