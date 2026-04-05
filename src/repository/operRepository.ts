import { operModel } from "../models/operModel";
import banco from "../database/database";

export const findAllOpers = async (): Promise<operModel[]> => {
  const result = await banco.query("SELECT * FROM opers"); 
  return result.rows;
}

export const findOperById = async (id: number): Promise<operModel[]> => {
  const result = await banco.query("SELECT * FROM opers WHERE id = $1",[id])
  return result.rows[0] || null
}

export const deleteOperById = async (id: number): Promise <operModel[]> => {
  const result = await banco.query("DELETE FROM opers WHERE id = $1",[id])
  return result.rows[0] || null
}
