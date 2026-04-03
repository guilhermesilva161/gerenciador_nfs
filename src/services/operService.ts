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