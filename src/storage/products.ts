import { Expose, Type, Transform } from "class-transformer";

export class productDTO {
  @Expose({ name: "id_bodega" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  idBodega: number;

  @Expose({ name: "producto" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  producto: object;

  @Expose({ name: "cantidad" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  cantidad: number;

  constructor(id_bodega: number, producto: object, cantidad: number) {
    this.idBodega = id_bodega;
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
