import { Router } from "express";
import { getBodegas, saveBodega } from "../controllers/bodegas.controller.js";
const router = Router();

router.get("/", getBodegas);
router.post("/", saveBodega);

export { router };
