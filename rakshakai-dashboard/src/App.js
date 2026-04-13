import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  // Static data (reliable for demo)
 const soldiers = [];

for (let i = 1; i <= 50; i++) {
  let lat, lng;

  // J&K
  if (i <= 15) {
    lat = 32 + Math.random() * 3;
    lng = 74 + Math.random() * 2;
  }
  // Punjab
  else if (i <= 30) {
    lat = 30 + Math.random() * 2;
    lng = 74 + Math.random() * 2;
  }
  // Rajasthan
  else {
    lat = 25 + Math.random() * 4;
    lng = 72 + Math.random() * 4;
  }

  soldiers.push({
    name: "Soldier " + i,
    latitude: lat,
    longitude: lng,
    heartRate: Math.floor(60 + Math.random() * 60),
    temperature: (36 + Math.random() * 4).toFixed(1),
    oxygenLevel: Math.floor(85 + Math.random() * 15),
  });
}

  return (
    <div className="App">
      <h1>RakshakAI Dashboard</h1>

      {/* 🗺 MAP */}
      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={10}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {soldiers.map((s, index) => (
          <Marker key={index} position={[s.latitude, s.longitude]}>
            <Popup>
              <b>{s.name}</b> <br />
              ❤️ HR: {s.heartRate} <br />
              🌡 Temp: {s.temperature} <br />
              🫁 Oxygen: {s.oxygenLevel} <br />

              {s.heartRate > 100 ||
              s.temperature > 38 ||
              s.oxygenLevel < 90 ? (
                <p style={{ color: "red" }}>🚨 CRITICAL</p>
              ) : (
                <p style={{ color: "green" }}>✅ Normal</p>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 📊 CARDS */}
      <div style={{ marginTop: "20px" }}>
        <h2>Soldier Health Data</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {soldiers.map((s, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                border: "1px solid gray",
                borderRadius: "10px",
                width: "200px",
                background: "#fff",
              }}
            >
              <h3>{s.name}</h3>
              <p>❤️ {s.heartRate}</p>
              <p>🌡 {s.temperature}</p>
              <p>🫁 {s.oxygenLevel}</p>

              {s.heartRate > 100 ||
              s.temperature > 38 ||
              s.oxygenLevel < 90 ? (
                <p style={{ color: "red" }}>🚨 CRITICAL</p>
              ) : (
                <p style={{ color: "green" }}>✅ Normal</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;