import * as httpCode from "../utils/http-codes"
import * as userRepository from "../repository/userRepository"
import { CreateUserDTO } from "../models/userModel";
import bcrypt from "bcrypt";

export const insertUserService = async (user: CreateUserDTO) => {
  const userExists = await userRepository.findUserByUsername(user.username);

  if (userExists) {
    return httpCode.badRequest();
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);

  const data = await userRepository.insertUser({
    ...user,
    password: hashedPassword
  });

  if (data) {
    return httpCode.created();
  }

  return httpCode.badRequest();
};

export const getUserUserService = async () =>{
        const data = await userRepository.findAllUser();
        let response = null;
    
        if(data){
            response = await httpCode.ok(data);
    
        }else{
            response = await httpCode.noContent();
        }
        return response;
}