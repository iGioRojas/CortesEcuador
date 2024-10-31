export interface Respuesta{
 resp:string;
 mensaje: string | null;
 mensajeError:string;
 extra:string;
 notificaciones: Consulta[];
}

export interface Consulta{
    idUnidadNegocios:number;
    cuentaContrato:string;
    alimentador: string;
    cuen:string;
    direccion:string;
    fechaRegistro:string;
    detallePlanificacion:Corte[];   
}

export interface Corte{
    alimentador: string;
    fechaCorte: string;
    horaDesde: string;
    horaHasta: string;
    comentario: string;
    fechaRegistro: string;
    fechaHoraCorte: string;
}