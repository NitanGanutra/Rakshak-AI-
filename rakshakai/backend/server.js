const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.c0.1:27017/rakshakai")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes (future use)
const soldierRoutes = require("./routes/soldierRoutes");
app.use("/api/soldiers", soldierRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("RakshakAI Backend Running");
});

// TEMP DATA (for map)
app.get("/soldiers", (req, res) => {
  res.json([
    {
      name: "Soldier 1",
      latitude: 28.7041,
      longitude: 77.1025,
      heartRate: 80,
      temperature: 37,
      oxygenLevel: 98,
    },
    {
      name: "Soldier 2",
      latitude: 28.5355,
      longitude: 77.3910,
      heartRate: 110,
      temperature: 39,
      oxygenLevel: 85,
    },
  ]);
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});