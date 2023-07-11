import { db } from "../../config/sql/dbConection.js";

export const producto = {
  getTotalProducts: async () => {
    const query = `
      SELECT  p.nombre, sum(i.cantidad) AS total
      FROM productos AS p
      INNER JOIN inventarios AS i
      ON p.id = i.id_producto
      GROUP BY p.nombre
      ORDER BY total DESC;
    `;
    const [data] = await db.query(query);
    // db.end();
    console.log(data);
    return data;
  }, 

  saveProducBodega: async ({ id_bodega, producto, cantidad } = {}) => {
    const [{ insertId }] = await db.query(
      "INSERT INTO productos SET ?",
      producto
    );
    const data = { id_producto: insertId, id_bodega, cantidad };
    const [resInvetario] = await db.query("INSERT INTO inventarios SET ?", data);
    const idInvetario = resInvetario.insertId
    return idInvetario
  },

  saveProductBodegaExist: async ({ id_producto, id_bodega, cantidad } = {})  => {
    const [data] = await db.query("SELECT * FROM inventarios WHERE id_bodega = ? AND  id_producto =? ",[id_bodega, id_producto])
    if(data === []) {
      const dataInventario = { id_producto, id_bodega, cantidad }
      const resInsert = await db.query("INSERT INTO inventarios SET ?", dataInventario)
      return {
        menssage: "insertado en inventario"
      }
    }

    const res = await db.query("UPDATE inventarios SET cantidad = ? WHERE id_bodega = ? AND id_producto = ?", [cantidad, id_bodega, id_producto])
    return {
      message : "actualizada la cantidad en inventarios"
    }
  }
}

