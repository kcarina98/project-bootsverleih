import { Boot } from "./model.js";

//* alle Boote anzeigen
export async function getBoote(req, res) {
  const boote = await Boot.find();
  res.json(boote);
}

//* ein Boot hinzufügen
export async function addBoot(req, res) {
  const newBoot = new Boot(req.body);
  newBoot.imgUrl = req.file.path;
  await newBoot.save();
  console.log("Neues Boot", newBoot);
  res.end();
}

//* ein Boot anzeigen (Detailpage)
export async function getOneBoot(req, res) {
  try {
    const { id } = req.params;
    console.log(req.params);
    console.log("hallo");
    const detailBoot = await Boot.findById(id);
    res.json(detailBoot).end();
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
}

//* ein Boot löschen
export async function deleteBoot(req, res) {
  const { id } = req.params;
  await Boot.findOneAndDelete({ _id: id });
  res.end();
}

//* ein Boot bearbeiten
export async function editBoot(req, res) {
  const { id } = req.params;

  const update = {
    baujahr: req.body.baujahr,
    seriennr: req.body.seriennr,
    material: req.body.material,
    art: req.body.art,
  };

  if (req.file) {
    update.imgUrl = req.file.path;
  }

  let editedBoot = await Boot.updateOne({ _id: id }, { $set: update });

  console.log("Edit Boot: ", editedBoot);
  res.end();
}

//* freie Boote anzeigen lassen
export async function getfreeBoote(req, res) {
  const { von, bis } = req.query;
  console.log("Req.query von - bis :", req.query);
  const startDate = new Date(von);
  const endDate = new Date(bis);

  // - ich schließe die reservierte Zeit aus und gebe die Zeit vorher und nachher als "free" aus
  // ich prüfe meine Boote anhand des Zeitraums und zeige nur die freien Boote an

  const freeBoot = await Boot.find({
    $and: [
      { "free-start": { $lte: startDate } },
      { "free-end": { $gte: endDate } },
    ],
  });
  console.log(freeBoot); //- meine verfügbaren Boote für den jeweiligen Zeitraum
  res.json(freeBoot);
}
