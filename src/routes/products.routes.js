import { Router } from "express";
import { getTotalProducts } from "../controllers/products.controller.js";

const router = Router();

router.get("/", getTotalProducts);

export { router };
