import mongoose from "mongoose";

const BootSchema = new mongoose.Schema({
  baujahr: Number,
  seriennr: Number,
  material: String,
  art: String,
  imgUrl: String,
});

export const Boot = mongoose.model("boote", BootSchema);
