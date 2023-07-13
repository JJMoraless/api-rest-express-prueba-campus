import { inventario } from "../models/inventario.model";

export const trasladarProductos = async ({body}, res) => {
    await inventario.transladarProducto(body)
};
