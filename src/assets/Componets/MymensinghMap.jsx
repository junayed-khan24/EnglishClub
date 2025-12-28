import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const normalIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MymensinghMap = () => {
  const location = {
    name: "EnglishClub - Mymensingh",
    lat: 24.7471,
    lng: 90.4203,
  };

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[location.lat, location.lng]} icon={normalIcon}>
        <Popup>
          <strong>{location.name}</strong>
          <br />
          Mymensingh City
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MymensinghMap;
