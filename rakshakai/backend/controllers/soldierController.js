const Soldier = require("../models/Soldier");

// Add new soldier
exports.addSoldier = async (req, res) => {
  try {

    const soldier = new Soldier(req.body);

    await soldier.save();

    res.status(201).json(soldier);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};


// Get all soldiers
exports.getAllSoldiers = async (req, res) => {
  try {

    const soldiers = await Soldier.find();

    res.json(soldiers);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};


// Update soldier vitals
exports.updateVitals = async (req, res) => {
  try {

    // Emergency detection logic
    if (
      req.body.heartRate > 110 ||
      req.body.oxygenLevel < 90 ||
      req.body.temperature > 39
    ) {
      req.body.emergencySignal = true;

      console.log("🚨 EMERGENCY ALERT");
      console.log("Soldier needs immediate help");

    } else {
      req.body.emergencySignal = false;
    }

    const updated = await Soldier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};


// Get emergency soldiers
exports.getEmergencySoldiers = async (req, res) => {
  try {

    const soldiers = await Soldier.find({ emergencySignal: true });

    res.json(soldiers);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};