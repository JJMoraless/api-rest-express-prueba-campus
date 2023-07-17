import mysql from "mysql2/promise";
const { DB_USER, DB_PASSWORD, PORT, DB } = process.env;

export const getConnection = async () => {
  try {
    console.log("******** conexion exitosa 👽 *******");
    return mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "db_inventario",
      port: 3306,
    });
  } catch (error) {
    console.log(error.message);
    console.log("*********** conexion fallida 💀 *********");
    return error.message;
  }
};

export const db = await getConnection();
