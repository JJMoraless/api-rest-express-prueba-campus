var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from 'class-transformer';
export class bodegasDTO {
    constructor(ID, nom_user, responsableID, estado_user) {
        this.id = ID;
        this.nombre = nom_user;
        this.id_responsable = responsableID;
        this.estado = estado_user;
    }
    get nombreId() {
        return `${this.id} - ${this.nombre}`;
    }
}
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], bodegasDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "estado", void 0);
