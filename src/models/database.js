import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env.dev
dotenv.config({ path: '.env.dev' });

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,    // Nome do banco de dados
  process.env.DB_USER,    // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST,    // Host do banco de dados
    dialect: process.env.DB_DIALECT, // Tipo de banco (postgres)
    logging: false
  }
);

export default sequelize;
