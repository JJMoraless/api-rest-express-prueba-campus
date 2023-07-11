import { producto } from "../models/products.model.js";

export const getTotalProducts = async (req, res) => {
  try {
    const data = await producto.getTotalProducts();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
 