import { CreateNotasDTO } from "../models/notasModel"
import { NotaFiscal } from "../../generated/prisma/client";
import banco from "../database/database"

export const insertNota = async (nota:CreateNotasDTO): Promise<NotaFiscal> => {
    const result: any = await banco.query("INSERT INTO notas_fiscais (numero,valor,data_recebimento,status) VALUES ($1, $2, $3, $4) RETURNING * ", [nota.numero,nota.valor,nota.data_recebimento,nota.status]);
    return result.rows[0];
}

export const updateNota = async(id:number, nota:NotaFiscal): Promise <NotaFiscal> =>{
  const result = await banco.query("UPDATE notas_fiscais SET numero = $1, valor = $2, data_recebimento = $3, status = $4 WHERE id = $5 RETURNING *", [nota.numero,nota.valor,nota.data_recebimento,nota.status,id])
  return result.rows[0];
}

export const findAllNotas = async (): Promise <NotaFiscal[]> =>{
    const result = await banco.query("SELECT * FROM notas_fiscais")
    return result.rows;
}

export const findNotaById = async (id:number): Promise <NotaFiscal[]> =>{
    const result = await banco.query("SELECT * FROM notas_fiscais WHERE id = $1",[id])
    return result.rows[0] || null; 
}

export const deleteNotaById = async (id: number): Promise <NotaFiscal[]> => {
  const result = await banco.query("DELETE FROM notas_fiscais WHERE id = $1",[id])
  return result.rows[0] || null
}
