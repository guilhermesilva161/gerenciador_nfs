import * as httpCode  from "../utils/http-codes";
import * as notasRepository from "../repository/notasRepository"
import { NotaFiscal } from "../../generated/prisma/client";
import { CreateNotasDTO } from "../models/notasModel";

export const insertNotaService = async(nota:CreateNotasDTO) =>{
    const data = await notasRepository.insertNota(nota);
    let response = null;

    if(data){
        response = await httpCode.created();

    }else{
        response = await httpCode.badRequest();
    }
    return response;
}

export const updateNotaService = async (id:number, nota:NotaFiscal) =>{
    const data = await notasRepository.updateNota(id,nota);
    let response = null;

    if(data){
        response = await httpCode.ok(data);

    }else{
        response = await httpCode.noContent();
    }
    return response;
}

export const getNotasService = async() =>{
    const data = await notasRepository.findAllNotas();
    let response:any = null;

    if(data){
        response = await httpCode.ok(data);

    }else{
        response = await httpCode.noContent();
    }
    return response;
}
export const getNotaById = async(id:number) =>{
    const data = await notasRepository.findNotaById(id);
    let response = null;
    
    if(data){
        response = await httpCode.ok(data)
    }else{
        response = await httpCode.badRequest()        
    }
    return response
}

export const deleteNotaById = async (id: number) =>{
    const data = await notasRepository.deleteNotaById(id);
    let response = null

    if(!data){
        response = await httpCode.noContent();

    }else{
        response = await httpCode.badRequest();
    }
    return response;

}