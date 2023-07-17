import { db } from "../../config/sql/dbConection.js";
import { producto } from "./products.model.js";

export const inventario = {
  transladarProducto: async ({ cantidad, idProducto, idOrigen, idDestino }) => {
    let querySelect =
      "SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?";
    let queryUpdate =
      "UPDATE inventarios SET ?  WHERE id_producto = ? AND id_bodega = ?";

    const [dataOrigen] = await db.query(querySelect, [idProducto, idOrigen]);
    const [dataDestino] = await db.query(querySelect, [idProducto, idDestino]);

    if (!dataOrigen.length)
      throw new Error(`products not found ${idProducto} en la bodega origen`);

    // - Saber total de productos de la bodega de origen
    const [{ cantidad: totalOrigen }] = dataOrigen;

    if (cantidad > totalOrigen)
      throw new Error(
        `cantidad ${cantidad} mayor a la disponible ${totalOrigen}`
      );

    console.log({ dataDestino, dataOrigen });

    if (!dataDestino.length) {
      console.log(
        "destino no tiene esos prouctos | insertando producto con 0...."
      );

      await producto.saveProductBodegaExist({
        id_producto: idProducto,
        id_bodega: idDestino,
        cantidad: 0,
      });
    }

    // - Saber total de productos que hay en el destino
    const [[{ cantidad: totalDestino, id: idInventario }]] = await db.query(
      querySelect,
      [idProducto, idDestino]
    );
    // - Sacar productos del origen
    await db.query(queryUpdate, [
      { cantidad: totalOrigen - cantidad },
      idProducto,
      idOrigen,
    ]);
    // - Ingresar productos sacados del origen al destino
    await db.query(queryUpdate, [
      { cantidad: totalDestino + cantidad },
      idProducto,
      idDestino,
    ]);

    let queryInsert = "INSERT INTO historiales SET ?";
    const dataHistorial = {
      cantidad,
      id_bodega_origen: idOrigen,
      id_bodega_destino: idDestino,
      id_inventario: idInventario,
    };
    await db.query(queryInsert, dataHistorial, idInventario);
  },
};

// inventario.transladarProducto({
//   "cantidad": 5,
//   "idProducto": 58,
//   "idOrigen": 11,
//   "idDestino": 23
// })
