import express from "express";
import multer from "multer";
import {
  addReservierung,
  deleteReservierung,
  getOneReservierung,
  getReservierungen,
} from "./controller.js";

export const router = new express.Router();

const upload = multer({ dest: "./images" });

router.get("/", getReservierungen);
router.post("/", upload.none(), addReservierung);
router.get("/:id", getOneReservierung);
router.delete("/:id", deleteReservierung);
