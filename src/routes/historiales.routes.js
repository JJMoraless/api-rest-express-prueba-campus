import { Router } from "express";
import { getMeteor } from "../controllers/meteoro.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("uwu");
});

router.get("/:id", getMeteor);

router.get("/near", (req, res) => {
  res.send("uwu");
});

export { router };
