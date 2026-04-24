import { Pool } from "pg";


const banco = new Pool({
  user: process.env.USER,
  host: "localhost",
  database: process.env.DATABASE,
  password: process.env.SENHA,
  port: 5432,
});

export default banco;