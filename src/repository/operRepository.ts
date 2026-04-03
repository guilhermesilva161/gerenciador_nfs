import { operModel } from "../models/operModel";
import banco from "../database/database";

export const findAllOpers = async (): Promise<operModel[]> => {
  const result = await banco.query("SELECT * FROM opers"); 
  return result.rows;
}