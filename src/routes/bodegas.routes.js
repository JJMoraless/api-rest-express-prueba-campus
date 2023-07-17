import { Router } from "express";
import { getBodegas, saveBodega } from "../controllers/bodegas.controller.js";
import { validateBodega } from "../middleware/validateBodega.js";
const router = Router();

router.get("/", getBodegas);
router.post("/", validateBodega ,saveBodega);

export { router };
