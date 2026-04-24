import { prisma } from "../lib/prisma";
import { CreateRoleDTO, UpdateRoleDTO } from "../models/roleModel";
import { Role } from "../../generated/prisma/client";

export const insertRole = async (role:CreateRoleDTO): Promise <Role> => {
    return await prisma.role.create({
      data: {
      name: role.name
    }
  })
};

export const updateRole = async (id: number, role: UpdateRoleDTO): Promise<Role> => {
  return await prisma.role.update({
    where: { id },
    data: {
      name: role.name
    }
  });
};

export const findAllRole = async (): Promise <Role[]> => {
    return await prisma.role.findMany();
};

export const findRoleById = async (id: number): Promise<Role | null> => {
  return await prisma.role.findUnique({
    where: { id }
  });
};

export const deleteRoleById = async (id: number): Promise<Role> => {
  return await prisma.role.delete({
    where: { id }
  });
};

