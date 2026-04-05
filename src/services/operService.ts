import * as httpCode from "../utils/http-codes"
import * as operRepository from "../repository/operRepository"

export const getOperService = async () =>{
    const data = await operRepository.findAllOpers();
    let response = null;

    if(data){
        response = await httpCode.ok(data);

    }else{
        response = await httpCode.noContent();
    }
    return response;
}

export const getOperById = async (id: number) =>{
    const data = await operRepository.findOperById(id);
    let response = null

    if(data){
        response = await httpCode.ok(data);

    }else{
        response = await httpCode.noContent();
    }
    return response;
}

export const deleteOperById = async (id: number) =>{
    const data = await operRepository.deleteOperById(id);
    let response = null

    if(!data){
        response = await httpCode.noContent();

    }else{
        response = await httpCode.badRequest();
    }
    return response;

}