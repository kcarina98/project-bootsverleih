import express from "express";
import multer from "multer";
import {
  addBoot,
  deleteBoot,
  getBoote,
  getOneBoot,
  editBoot,
  getfreeBoote,
} from "./controller.js";
import { useBasicAuth } from "../Login/middleware/basicAuth.js";

export const router = new express.Router();
const upload = multer({ dest: "./images" });

//* Route für freie Boote für die Reservierungen
router.get("/free", getfreeBoote);

router.get("/", getBoote);
router.post("/", useBasicAuth, upload.single("img"), addBoot);
router.get("/:id", useBasicAuth, getOneBoot);
router.delete("/:id", useBasicAuth, deleteBoot);
router.put("/:id", useBasicAuth, upload.single("img"), editBoot);
