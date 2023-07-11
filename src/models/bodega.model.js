import { db } from "../../config/sql/dbConection.js";

export const bodega = {
  getBodegas: async () => {
    const [rows] = await db.query("SELECT * FROM bodegas ORDER BY nombre ASC");
    db.end();
    return rows;
  },

  saveBodega: async ({ body }) => {
    const [rows] = await db.query("INSERT INTO bodegas SET ?", body);
    db.end();
    return rows;
  },

};

