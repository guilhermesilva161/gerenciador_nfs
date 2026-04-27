import {  Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import "dotenv/config";


export function verifyAuth (req:Request, res:Response, next:NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Sem Token de autorização" });
  }

  const [, token] = authToken.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.KEY!) as any;

    console.log("Token for user", decoded.sub);

        req.user = {
        id: decoded.sub,
        name: decoded.name,
        role: decoded.role
        };    
    

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }  
}