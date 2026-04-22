import {  Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';
import "dotenv/config";

export function verifyAuth (req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization

    if(authToken) {
        const [, token] = authToken.split(' ')
        try {
            const {sub} =  verify(token, process.env.KEY!)
            console.log ('Token for user', sub)
            return next();   
        } catch (error) {
            return {message: "Unauthorized"}
            
        }
    }
}