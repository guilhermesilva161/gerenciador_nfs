export interface CreateNotasDTO {
    numero: string;
    valor:number;
    data_recebimento: Date;
    status:string;
    oper_atual_id:number;
}

export interface UpdateNotasAdmDTO {
    numero: string;
    valor:number;
    data_recebimento: Date;
    status:string;
    oper_atual_id:number;
}

export interface UpdateNotasOperDTO {
    data_inicio:Date;
    status_entrega: string;
    motivo_parcialidade:string;
    status:string;
    data_conclusao:Date;
}

