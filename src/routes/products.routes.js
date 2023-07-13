import { Router } from "express";

import {
  getTotalProducts,
  saveProductBodega,
  saveProductExistBodega,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getTotalProducts);
router.post("/", saveProductBodega);
router.post("/:idProduct/bodegas/:idBodega", saveProductExistBodega)


export { router };
