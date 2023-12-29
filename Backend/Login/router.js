import express from "express";
import { useBasicAuth } from "../Login/middleware/basicAuth.js";
import { addUser, getUsers, userLogin } from "./controller.js";
import multer from "multer";

export const router = new express.Router();
const upload = multer({ dest: "./images" });

router.post("/", useBasicAuth, userLogin);
router.post("/", upload.none(), addUser);
router.get("/", getUsers);
