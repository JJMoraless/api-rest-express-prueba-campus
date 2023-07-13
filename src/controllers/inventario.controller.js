import { inventario } from "../models/inventario.model.js";

export const trasladarProductos = async ({body}, res) => {
    try {
        await inventario.transladarProducto(body)
        res.send({message: "transladado con exito"})
    } catch (error) {
        res.status(401).send(error.message)        
    }
};
