import mysql from "mysql2/promise";

const getConnection = async () => {
  try {
    return mysql.createPool({
      host: "localhost",
      user: "campus",
      password: "campus2023",
      database: "db_inventario",
      port: 3306,
    });
  } catch (error) {
    console.log(error.message);
    console.log("*********** conexion fallida *********");
    return 
  }
  
};


export const db = await getConnection();
