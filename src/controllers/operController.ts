import { Request,Response } from "express";
import * as service from "../services/operService";

export const getOper = async (req: Request, res: Response) =>{
    const httpCode = await service.getOperService();
    res.status(httpCode.statusCode).json(httpCode.body);
};