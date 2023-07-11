import { producto } from "../models/products.model.js";

export const getTotalProducts = async (req, res) => {
  try {
    const data = await producto.getTotalProducts();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const saveProductBodega = async ({ body }, res) => {
  try {
    const idInventario = await producto.saveProducBodega(body);
    res.send({ id: idInventario, ...body });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const saveProductExistBodega = async ({ params, body }, res) => {
  const { idProduct, idBodega } = params;
  try {
    const {cantidad} = body;
    const message = await producto.saveProductBodegaExist({
      id_producto: idProduct,
      id_bodega: idBodega,
      cantidad,
    });
    res.send(message);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
