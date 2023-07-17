import { Expose, Type, Transform } from "class-transformer";

export class bodegasDTO {
  @Expose({ name: "nombre" })
  @Type(() => String)
  nombre: string;

  @Expose({ name: "id_responsable" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  id_responsable: number;

  @Expose({ name: "estado" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  estado: number;

  constructor(nom_user: string, responsableID: number, estado_user: number) {
    this.nombre = nom_user;
    this.id_responsable = responsableID;
    this.estado = estado_user;
  }
}
