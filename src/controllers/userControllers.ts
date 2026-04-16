import { Request,Response } from "express";
import * as service from "../services/userService";

export const insertUser = async (req:Request, res: Response) =>{
    const httpCode = await service.insertUserService(req.body);
    return res.status(httpCode.statusCode).json(httpCode.body);
}

export const getUser = async (req:Request, res: Response) =>{
    const httpCode = await service.getUserUserService();
    return res.status(httpCode.statusCode).json(httpCode.body);
}