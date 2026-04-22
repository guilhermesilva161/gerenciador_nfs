import { CreateNotasDTO,UpdateNotasOperDTO,UpdateNotasAdmDTO } from "../models/notasModel"
import { NotaFiscal } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

export const insertNota = async (nota: CreateNotasDTO): Promise <NotaFiscal> =>{
    return await prisma.notaFiscal.create({
      data: nota
    });
};

export const updateNotaAdmById = async (id:number, nota:UpdateNotasAdmDTO): Promise <NotaFiscal | null> => {
  return await prisma.notaFiscal.update({
    where:{id},
    data: nota
  })
}

export const updateNotaOperById = async (id:number, nota:UpdateNotasOperDTO): Promise <NotaFiscal | null> => {
  return await prisma.notaFiscal.update({
    where:{id},
    data: nota
  })
}

export const findAllNotas = async(): Promise <NotaFiscal[]> =>{
  return await prisma.notaFiscal.findMany();
};

export const findNotaById = async(id:number): Promise <NotaFiscal | null > =>{
  return await prisma.notaFiscal.findUnique({
    where:{id}
  });
};

export const deleteNotaById = async(id:number): Promise <NotaFiscal | null > =>{
  return await prisma.notaFiscal.delete({
    where:{id}
  });
};