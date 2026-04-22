import * as httpCode  from "../utils/http-codes";
import * as notasRepository from "../repository/notasRepository"
import { CreateNotasDTO, UpdateNotasAdmDTO, UpdateNotasOperDTO } from "../models/notasModel";

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

export const updateNotaAdmService = async (id:number, nota:UpdateNotasAdmDTO) =>{
    const data = await notasRepository.updateNotaAdmById(id,nota);
    let response = null;

    if(data){
        response = await httpCode.ok(data);

    }else{
        response = await httpCode.noContent();
    }
    return response;
}

export const updateNotaOperService = async (id:number, nota:UpdateNotasOperDTO) =>{
    const data = await notasRepository.updateNotaOperById(id,nota);
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