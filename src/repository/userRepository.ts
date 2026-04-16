import { prisma } from "../lib/prisma";
import {userModel} from "../models/userModel";

export const insertUser =async (user:userModel): Promise <userModel> => {
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

export const updateUser =async (id:number, user:userModel): Promise <userModel> => {
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

export const findAllUser = async (): Promise <userModel[]>=>{
    return await prisma.user.findMany()
}

export const findUserById =async (id:number): Promise <userModel | null>  => {
    return await prisma.user.findUnique({
        where:{id}
    })
}

export const deleteUserById =async (id:number): Promise <userModel | null>  => {
    return await prisma.user.delete({
        where:{id}
    })
}