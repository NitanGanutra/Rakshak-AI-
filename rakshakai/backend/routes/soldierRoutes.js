const express = require("express");
const router = express.Router();

const {
  addSoldier,
  getAllSoldiers,
  updateVitals,
  getEmergencySoldiers
} = require("../controllers/soldierController");

router.post("/add", addSoldier);

router.get("/", getAllSoldiers);

router.put("/update/:id", updateVitals);

// Emergency soldiers route
router.get("/emergency", getEmergencySoldiers);

module.exports = router;