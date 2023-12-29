import mongoose from "mongoose";

const ReservierungSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  bootid: String,
});

export const Reservierung = mongoose.model(
  "reservierungen",
  ReservierungSchema
);
