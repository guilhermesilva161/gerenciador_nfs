import { Request,Response } from "express";
import * as service from "../services/operService";

export const getOper = async (req: Request, res: Response) =>{
    const httpCode = await service.getOperService();
    res.status(httpCode.statusCode).json(httpCode.body);
};

export const getOperById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id as string);
    const httpCode = await service.getOperById(id);
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const deleteOperById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id as string);
    const httpCode = await service.deleteOperById(id);
    res.status(httpCode.statusCode).json(httpCode.body);
}