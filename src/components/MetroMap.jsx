import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { metroStations } from '../utils/constants';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MetroMap = () => {
  const position = [25.2048, 55.2708]; // Dubai Center

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="section-title">
        Dubai <span className="text-amber-500">Metro</span> Map
      </h2>
      
      <div className="glass-card p-2 overflow-hidden rounded-xl">
        <MapContainer 
          center={position} 
          zoom={12} 
          style={{ height: '500px', width: '100%', borderRadius: '0.75rem' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {metroStations.map((station, index) => (
            <Marker key={index} position={[station.lat, station.lng]}>
              <Popup>
                <div className="text-center">
                  <strong className="text-dark">{station.name}</strong><br />
                  <span className="text-xs text-gray-600">Line: {station.line}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MetroMap;