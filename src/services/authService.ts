import {findUserByUsername } from "../repository/userRepository";
import { LoginDTO } from "../models/loginDTO";
import bcrypt from "bcrypt"

export const login = async (data: LoginDTO) => {
  const user = await findUserByUsername(data.username);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const isValid = await bcrypt.compare(data.password, user.password);

  if (!isValid) {
    throw new Error("Senha inválida");
  }

  // GERAR JWT aqui
  return user;
};