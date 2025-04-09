import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { motion } from 'framer-motion';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9obmVyc3MiLCJhIjoiY200ZjdndW9lMTRvNjJqczhwa2R6ZmE3ZCJ9.QfEMKgAHigjQfJm19TjNtA';

const crimeLocations = [
  { id: 'delhi', name: 'Delhi, Delhi, India', color: 'red', description: 'Delhi - High Crime' },
  { id: 'mumbai', name: 'Mumbai, Maharashtra, India', color: 'blue', description: 'Mumbai - High Crime' },
  { id: 'bangalore', name: 'Bangalore, Karnataka, India', color: 'green', description: 'Bangalore - High Crime' },
];

const geocodePlace = async (placeName: string) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(placeName)}.json?access_token=${MAPBOX_TOKEN}`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const { center } = data.features[0];
      return {
        latitude: center[1],
        longitude: center[0],
      };
    }
    return null;
  } catch (error) {
    console.error(`Error geocoding ${placeName}:`, error);
    return null;
  }
};

export function CrimeMap() {
  const [viewState, setViewState] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 4,
    pitch: 10,
    bearing: 0,
  });

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const locationsWithCoordinates = await Promise.all(
        crimeLocations.map(async (location) => {
          const coordinates = await geocodePlace(location.name);
          return {
            ...location,
            coordinates: coordinates || { latitude: 20.5937, longitude: 78.9629 },
          };
        })
      );
      setLocations(locationsWithCoordinates);
    };

    fetchCoordinates();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Crime Heat Map</h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-lg">
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Map
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
              >
                {locations.map((location) => (
                  location.coordinates && (
                    <Marker
                      key={location.id}
                      latitude={location.coordinates.latitude}
                      longitude={location.coordinates.longitude}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: location.color,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        title={location.description}
                      >
                        📍
                      </div>
                    </Marker>
                  )
                ))}
              </Map>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}