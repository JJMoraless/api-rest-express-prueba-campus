import { Expose, Type, Transform } from "class-transformer";

export class inventarioDTO {
  @Expose({ name: "cantidad" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  cantidad: number;

  @Expose({ name: "idProducto" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  idProducto: number;

  @Expose({ name: "idOrigen" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  origen: number;

  @Expose({ name: "idOrigen" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  destino: number;

  constructor(
    cantidad: number,
    idProducto: number,
    origen: number,
    destino: number
  ) {
    this.cantidad = cantidad;
    this.idProducto = idProducto;
    this.origen = origen;
    this.destino = destino;
  }
}
