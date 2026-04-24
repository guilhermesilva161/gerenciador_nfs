
import { Request, Response } from "express";
import * as service from "../services/notasService";

export const insertNota = async (req: Request, res: Response) =>{
    const httpCode = await service.insertNotaService(req.body);
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const updateNotaAdm = async(req: Request, res: Response,) =>{
    const httpCode = await service.updateNotaAdmService(Number(req.params.id),req.body);
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const updateNotaOper = async(req: Request, res: Response,) =>{
    const httpCode = await service.updateNotaOperService(Number(req.params.id),req.body);
    res.status(httpCode.statusCode).json(httpCode.body);
}


export const getNotas = async (req: Request, res: Response) =>{
    const httpCode = await service.getNotasService();
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const getNotaById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id as string)
    const httpCode= await service.getNotaById(id);
    res.status(httpCode.statusCode).json(httpCode.body);
}

export const deleteNotaById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id as string);
    const httpCode = await service.deleteNotaById(id);
    res.status(httpCode.statusCode).json(httpCode.body);
}