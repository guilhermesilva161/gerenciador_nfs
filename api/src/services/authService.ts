import {findUserById, findUserByUsername } from "../repository/userRepository";
import { LoginDTO, UserDTO } from "../models/loginDTO";
import * as  HttpCode  from "../utils/http-codes";
import "dotenv/config";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const getAuthenticated = async (data:LoginDTO): Promise <LoginDTO | null > =>{
  const user = await findUserByUsername(data.username);
      let response = null
       if (!user) {
        response = HttpCode.noContent();
        throw new Error("Usuário não encontrado");
      }

  const isValid = await bcrypt.compare(data.password, user.password);

      if (!isValid) {
        response = HttpCode.noContent();
        throw new Error("Senha inválida");
      }
  response =  user; 
  return response;
}

export const getToken = async (data:LoginDTO)  =>{
    const user = await getAuthenticated(data);
    const tokenData = {
      name:user?.username,
      role:user?.roleId
    }
    const tokenKey = process.env.KEY!;

    const tokenOptions = {
      subject: `Usuário autorizado: ${user?.username.toString()}`,
    }

    const token = jwt.sign(tokenData,tokenKey,tokenOptions);

    return {
      token,
      user: {
        username: user?.username,
        role: user?.roleId
      }
    }
  }

export const getUser = async (id:number) => {
  let response = null
  const user = await findUserById(id)

  if(user){
    const loginDTO: UserDTO = {
      id:user.id,
      username: user.username
    }
      response = HttpCode.ok(loginDTO);
  } else{
    response = HttpCode.badRequest()
  }
  return response
}