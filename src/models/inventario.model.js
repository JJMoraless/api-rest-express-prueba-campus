import { db } from "../../config/sql/dbConection.js";
import { producto } from "./products.model.js";

export const inventario = {
  transladarProducto: async ({ cantidad, idProducto, idOrigen, idDestino}) => {

    let querySelect = "SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?";
    let queryUpdate = "UPDATE inventarios SET ?  WHERE id_producto = ? AND id_bodega = ?";
    
    const [dataOrigen] = await db.query(querySelect, [idProducto, idOrigen]);
    const  [dataDestino] = await db.query(querySelect, [idProducto, idDestino]);

    // - Saber total de productos de la bodega de origen
    const [{cantidad: totalOrigen}] = dataOrigen

    if(!dataOrigen.length) {
      throw new Error(`no existen productos con id ${idProducto} en la bodega origen`)
    }

    if(cantidad > totalOrigen){
      throw new Error(`cantidad ${cantidad} es mayor a la disponible ${totalOrigen}`)
    }

    if(!dataDestino.length){
      producto.saveProductBodegaExist({ id_producto:idProducto,id_bodega:idDestino, cantidad: 0})
    }

    // - Saber total de productos que hay en el destino
    const  [[{cantidad: totalDestino, id:idInventario}]] = await db.query(querySelect, [idProducto, idDestino]);

    // - Sacar productos del origen
    await db.query(queryUpdate, [{"cantidad": totalOrigen - cantidad}, idProducto, idOrigen  ]);

    // - Ingresar productos sacados del origen al destino
    await db.query(queryUpdate, [{"cantidad": totalDestino + cantidad }, idProducto, idDestino ]);

    let queryInsert = "INSERT INTO historiales SET ?"
    const dataHistorial = {
      cantidad,
      id_bodega_origen: idOrigen,
      id_bodega_destino: idDestino,
      id_inventario:idInventario
    }
    await db.query(queryInsert, dataHistorial, idInventario )
  },
};

