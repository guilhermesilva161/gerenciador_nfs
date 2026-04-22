import { prisma } from "../lib/prisma";
import { Oper } from "../../generated/prisma/client";
import { CreateOperDTO } from "../models/operModel";

export const insertOper = async (oper: CreateOperDTO): Promise<Oper> => {
  return await prisma.oper.create({
    data: oper
  });
};

export const updateOper = async (id: number, oper:CreateOperDTO): Promise<Oper> => {
  return await prisma.oper.update({
    where: { id },
    data: {
      name: oper.name,
      age: oper.age,
      service: oper.service
    }
  });
};

export const findAllOpers = async (): Promise<Oper[]> => {
  return await prisma.oper.findMany();
};

export const findOperById = async (id: number): Promise<Oper | null> => {
  return await prisma.oper.findUnique({
    where: { id }
  });
};

export const deleteOperById = async (id: number): Promise<Oper> => {
  return await prisma.oper.delete({
    where: { id }
  });
};
