import { prisma } from "../lib/prisma";
import {CreateUserDTO} from "../models/userModel";
import { User } from "../../generated/prisma/client";

export const insertUser =async (user:CreateUserDTO): Promise <User> => {
    return await prisma.user.create({
        data:{
            username:user.username,
            password:user.password,
            roleId:user.roleId,
            operId:user.operId
        }
    })
}

export const findUserByUsername = async (username: string) => {
  return prisma.user.findUnique({
    where: { username },
    include: { role: true, oper: true }
  });
};

export const updateUser =async (id:number, user:User): Promise <User> => {
    return await prisma.user.update({
        where:{id},
        data:{
            username:user.username,
            password:user.password,
            roleId:user.roleId,
            operId:user.operId
        }
    })
}

export const findAllUser = async (): Promise <User[]>=>{
    return await prisma.user.findMany()
}

export const findUserById =async (id:number): Promise <User | null>  => {
    return await prisma.user.findUnique({
        where:{id}
    })
}

export const deleteUserById =async (id:number): Promise <User | null>  => {
    return await prisma.user.delete({
        where:{id}
    })
}