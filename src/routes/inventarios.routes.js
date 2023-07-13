import { Router } from "express";
import { trasladarProductos } from "../controllers/inventario.controller";

const router = Router();
router.get("/translado", trasladarProductos )

export { router };
