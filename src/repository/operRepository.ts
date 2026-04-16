import { prisma } from "../lib/prisma";
import { operModel } from "../models/operModel";

export const insertOper = async (oper: operModel): Promise<operModel> => {
  return await prisma.oper.create({
    data: {
      name: oper.name,
      age: oper.age,
      service: oper.service
    }
  });
};

export const updateOper = async (id: number, oper: operModel): Promise<operModel> => {
  return await prisma.oper.update({
    where: { id },
    data: {
      name: oper.name,
      age: oper.age,
      service: oper.service
    }
  });
};

export const findAllOpers = async (): Promise<operModel[]> => {
  return await prisma.oper.findMany();
};

export const findOperById = async (id: number): Promise<operModel | null> => {
  return await prisma.oper.findUnique({
    where: { id }
  });
};

export const deleteOperById = async (id: number): Promise<operModel> => {
  return await prisma.oper.delete({
    where: { id }
  });
};
