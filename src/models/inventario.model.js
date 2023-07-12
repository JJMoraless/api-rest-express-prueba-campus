import { db } from "../../config/sql/dbConection.js";

const inventario = {
  transladarProducto: async ({ cantidad, idProducto, idOrigen, idDestino} = {}) => {

    let querySelect = "SELECT id, cantidad FROM inventarios WHERE id_producto = ? AND id_bodega = ?";
    const [[{cantidad: cantidadActual, id : idInventarioActual}]] = await db.query(querySelect, [idProducto, idOrigen]);
    console.log({cantidadActual, idInventarioActual });

    if(cantidad > cantidadActual){
      throw new Error(`cantidad ${cantidad} es mayor a la disponible ${cantidadActual}`)
    }

    // let queryUpdate = "UPDATE inventarios SET ?  WHERE id = ?";
    // const data = await db.query(queryUpdate, [{"cantidad": cantidadActual - cantidad}, idInventarioActual ]);

    const  [[{cantidad: dantidadDestino}]] = await db.query(querySelect, [idProducto, idDestino]);
    console.log({dantidadDestino});

    // queryUpdate = "UPDATE inventarios SET ?  WHERE id_bodega = ? AND id_produto = ?";
    // await db.query(queryUpdate, [{"cantidad":  cantidad}, idDestino, idProducto ]);

    
  },
};

inventario.transladarProducto({idProducto:33, idOrigen:11, idDestino: 12, cantidad: 100 });
