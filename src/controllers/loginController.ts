import { Request,Response } from "express";
import * as auth from "../services/authService";

export const login = async (req: Request, res: Response)=>{
    
    try {
        const token = await auth.getToken(req.body);
        res.status(200).json({token});  
    } catch (error) {
        return res.status(500).json({message:"Erro ao passar o username e a senha"}); 
    }

}

export const getUser = async (req: Request, res: Response) =>{ 
    const id = parseInt(req.params.id as string)
    const httpCode = await auth.getUser(id) 
     res.status(httpCode.statusCode).json(httpCode.body); 
}