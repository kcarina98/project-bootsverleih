import { Reservierung } from "./model.js";

export async function getReservierungen(req, res) {
  const reservierungen = await Reservierung.find();
  res.json(reservierungen);
}

export async function addReservierung(req, res) {
  const newReservierung = new Reservierung(req.body);
  await newReservierung.save();
  console.log("Neue Reservierung", newReservierung);
  res.end();
}

export async function getOneReservierung(req, res) {
  const { id } = req.params;

  const detailReservierung = await Reservierung.find({ _id: id });
  // console.log(detailReservierung);
  res.json(detailReservierung).end();
}

export async function deleteReservierung(req, res) {
  const { id } = req.params;
  await Reservierung.findOneAndDelete({ _id: id });
  res.end();
}
