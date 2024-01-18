import { Personal } from "./personal";

export interface SubActividad {
    pkProyectoID : number,
    fechaInicio : string,
    fechaFin : string,
    descripcion : string,
    nombre : string,
    personalAsginado : Personal
}
