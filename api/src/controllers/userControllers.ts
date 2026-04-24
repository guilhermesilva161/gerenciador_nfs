import { Request,Response } from "express";
import * as service from "../services/userService";

export const insertUser = async (req:Request, res: Response) =>{
    const httpCode = await service.insertUserService(req.body);
    return res.status(httpCode.statusCode).json(httpCode.body);
}

export const getUser = async (req:Request, res: Response) =>{
    const httpCode = await service.getUserService();
    return res.status(httpCode.statusCode).json(httpCode.body);
}

export const updateUser = async (req:Request, res: Response) =>{
    const httpCode = await service.updateUserService(Number(req.params.id),req.body);
    return res.status(httpCode.statusCode).json(httpCode.body);
}

export const deleteeUser = async (req:Request, res: Response) =>{
    const httpCode = await service.deleteUserService(Number(req.params.id));
    return res.status(httpCode.statusCode).json(httpCode.body);
}