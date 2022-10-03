import pkg from "pg";

const { Pool } = pkg;

// Adicionar dotenv aqui
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

export default pool;
