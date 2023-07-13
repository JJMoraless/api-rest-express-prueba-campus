import { Router } from "express";
import { trasladarProductos } from "../controllers/inventario.controller.js";

const router = Router();
router.post("/translado", trasladarProductos )

export { router };
