import { operModel } from "../models/operModel";
import banco from "../database/database";

export const insertOper = async (oper: operModel): Promise<operModel> => {
    const result: any = await banco.query("INSERT INTO opers (name, age, service) VALUES ($1, $2, $3) RETURNING * ", [oper.name,oper.age,oper.service]);
    return result.rows[0];
}

export const updateOper = async(id:number, oper:operModel): Promise <operModel> =>{
  const result = await banco.query("UPDATE opers SET  name = $1, age = $2, service = $3 WHERE id = $4 RETURNING *", [oper.name,oper.age,oper.service, id])
  return result.rows[0];
}

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
