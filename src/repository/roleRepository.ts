import { prisma } from "../lib/prisma";
import { roleModel } from "../models/roleModel";

export const insertRole = async (role:roleModel): Promise <roleModel> => {
    return await prisma.role.create({
      data: {
      name: role.name
    }
  })
};

export const updateRole = async (id: number, role: roleModel): Promise<roleModel> => {
  return await prisma.role.update({
    where: { id },
    data: {
      name: role.name
    }
  });
};

export const findAllRole = async (): Promise <roleModel[]> => {
    return await prisma.role.findMany();
};

export const findRoleById = async (id: number): Promise<roleModel | null> => {
  return await prisma.role.findUnique({
    where: { id }
  });
};

export const deleteRoleById = async (id: number): Promise<roleModel> => {
  return await prisma.role.delete({
    where: { id }
  });
};

