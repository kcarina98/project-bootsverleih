import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./Boote/router.js";
import { router as ReservierungRouter } from "./Reservierung/router.js";
import { router as LoginRouter } from "./Login/router.js";

await mongoose.connect(process.env.MONGODB);

const app = express();

app.use(cors());
app.use("/images", express.static("./images"));

app.use("/api/boote", router);
app.use("/api/reservierungen", ReservierungRouter);

app.use("/api/login", LoginRouter);

app.listen(process.env.PORT, console.log(process.env.PORT));
