import { Expose, Type, Transform } from "class-transformer";

export class productBodegaDTO {

  @Expose({ name: "cantidad" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  cantidad: number;

  constructor(cantidad: number) {
    this.cantidad = cantidad;
  }
}
