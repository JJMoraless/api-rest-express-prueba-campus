import { Expose, Type, Transform } from 'class-transformer';

export class bodegasDTO {

    @Expose({ name: 'id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    id: number;

    @Expose({ name: 'nombre' })
    @Type(() => String)
    nombre: string;

    @Expose({ name: 'id_responsable' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    id_responsable: number;

    @Expose({ name: 'estado' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    estado: number;

    constructor(
        ID: number,
        nom_user: string,
        responsableID: number,
        estado_user: number,
    ) {
        this.id = ID;
        this.nombre = nom_user;
        this.id_responsable = responsableID;
        this.estado = estado_user;
    }

    get nombreId(): string {
        return `${this.id} - ${this.nombre}`;
    }
}