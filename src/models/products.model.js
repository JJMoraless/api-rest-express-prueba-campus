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
    console.log(data);
    return data;
  },

  saveProducBodega: async ({ id_bodega, producto, cantidad } = {}) => {
    const [{ insertId }] = await db.query(
      "INSERT INTO productos SET ?",
      producto
    );

    const data = { id_producto: insertId, id_bodega, cantidad };
    const [resInvetario] = await db.query(
      "INSERT INTO inventarios SET ?",
      data
    );
    const idInvetario = resInvetario.insertId;
    return idInvetario;
  },

  saveProductBodegaExist: async ({ id_producto, id_bodega, cantidad } = {}) => {
    const querySelect = "SELECT * FROM inventarios WHERE id_bodega = ? AND  id_producto = ? ";
    const [data] = await db.query(querySelect, [id_bodega, id_producto]);
    console.log(data);

    if (!data.length) {
      console.log("se inserto");
      const queryInsert = "INSERT INTO inventarios SET ?";
      const dataInventario = { id_producto, id_bodega, cantidad };
      const resInsert = await db.query(queryInsert, dataInventario);
      return {
        menssage: "insertado en inventario",
      };
    }

    const queryUpdate = "UPDATE inventarios SET cantidad = ? WHERE id_bodega = ? AND id_producto = ?";
    const res = await db.query(queryUpdate, [cantidad, id_bodega, id_producto]);
    console.log("se actualizo");

    return {
      message: "actualizada la cantidad en inventarios",
    };
  },

  transladarProducto: () => {

  },
};

// producto.saveProductBodegaExist({ id_producto: 12, id_bodega: 12, cantidad: 23})
