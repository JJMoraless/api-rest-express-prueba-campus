import { db } from "../../config/sql/dbConection.js";

export const producto = {
  getTotalProducts: async () => {
    const query = `
      SELECT  p.nombre, sum(i.cantidad) AS total
      FROM productos AS p
      INNER JOIN inventarios AS i
      ON p.id = i.id_producto
      GROUP BY p.nombre
      ORDER BY cantidad DESC;
    `;
    const [data] = await db.query(query);
    db.end();
    return data;
  },

  saveProducBodega: async ({ idBodega, cantidad } = {}) => {
    const product = {
      nombre: "jhon",
      descripcion: "uwu",
      estado: 1,
    };
    const [{insertId}] = await db.query("INSERT INTO productos SET ?", product);
    db.end()
    console.log(insertId);
  },
};

producto.saveProducBodega();
