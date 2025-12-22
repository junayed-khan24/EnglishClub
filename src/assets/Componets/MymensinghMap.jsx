"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ----------------- Icon -----------------
const normalIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MymensinghMap = () => {
  // Mymensingh City Coordinates
  const location = {
    name: "Mymensingh City",
    latitude: 24.7471,
    longitude: 90.4203,
    info: "This is Mymensingh City center.",
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Mymensingh City Location
      </h1>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13} // zoom level
          scrollWheelZoom={true}
          className="h-[600px] w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[location.latitude, location.longitude]}
            icon={normalIcon}
          >
            <Popup>
              <strong>{location.name}</strong>
              <br />
              {location.info}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MymensinghMap;
