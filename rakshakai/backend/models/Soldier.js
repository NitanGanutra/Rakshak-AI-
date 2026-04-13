const mongoose = require("mongoose");

const SoldierSchema = new mongoose.Schema({

  soldierId:{
    type:String,
    required:true,
    unique:true
  },

  name:String,
  rank:String,
  unit:String,

  latitude:Number,
  longitude:Number,

  heartRate:Number,
  oxygenLevel:Number,
  temperature:Number,

  emergencySignal:{
    type:Boolean,
    default:false
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model("Soldier", SoldierSchema);