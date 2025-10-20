import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import markerIcon from "/images/icon-location.svg"


function OffsetView() {
  const map = useMap();

  useEffect(() => {
    map.panBy([0, -100]); 
  }, [map]);

  return null;
}

const icon = L.icon({
  iconUrl: markerIcon,
  iconSize: [46, 56],
  iconAnchor: [12, 41],
});

export default function MapView({ info }) {
  if (!info || !info.location) return null;
  const lat = info.location.lat;
  const lng = info.location.lng;

  const invalidCoords = 
  lat === undefined ||
  lng === undefined ||
  isNaN(lat) ||
  isNaN(lng);

  if(invalidCoords){
    return(
      <section className="w-full flex-1 map flex items-center justify-center bg-gray-200">
        <p className="text-gray-600 italic">Waiting for valid coordinates...</p>
      </section>
    )
  }
  return (
    <section className="w-full h-2/3 map z-10">
      <MapContainer
        center={[lat, lng]}
        zoomControl={false}
        zoom={13}
        style={{ height: "100%", width: "100%", zIndex: "0" }}
        key={`${lat}-${lng}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        <Marker position={[lat, lng]} icon={icon}>
          <Popup>📍 User Location</Popup>
        </Marker>
        <OffsetView />
      </MapContainer>
    </section>
  );
}
