import { Sequelize } from "sequelize"

const sequelize = new Sequelize("todolist", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

export default sequelize