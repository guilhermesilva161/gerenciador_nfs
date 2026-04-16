import * as roleRepository from "../repository/roleRepository"
import * as httpCode  from "../utils/http-codes"
import { roleModel } from "../models/roleModel"

export const insertRoleService = async (role:roleModel)=>{
    const data = await roleRepository.insertRole(role);
    let response = null;

    if(data){
        response = await httpCode.created();
    }else{
        response = await httpCode.badRequest();
    }
    return response;
    

}

export const getRoleService = async () =>{
    const data = await roleRepository.findAllRole();
    let response = null;

    if(data){
        response = await httpCode.ok(data);
    }else{
        response = await httpCode.badRequest();
    }
    return response
}