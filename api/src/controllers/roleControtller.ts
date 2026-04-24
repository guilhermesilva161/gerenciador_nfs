import { Request, Response } from "express";
import * as services from "../services/roleService"

export const insertRole = async(req:Request, res:Response) =>{
    const httpCode = await services.insertRoleService(req.body);
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const getRole = async(req:Request, res:Response) =>{
    const httpCode = await services.getRoleService();
    res.status(httpCode.statusCode).json(httpCode.body);
}