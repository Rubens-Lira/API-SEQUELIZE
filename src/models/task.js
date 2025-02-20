import { DataTypes } from "sequelize"
import sequelize from "./database.js"

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Não permite valores nulos
      primaryKey: true,
      autoIncrement: true, // Permite autoincremento no ID
      field: 'tsk_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tsk_name'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tsk_status'
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      field: 'tsk_priority'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tsk_description'
    },
  },
  {
    tableName: 'tasks',
    timestamps: false, // Desativa createdAt e updatedAt
    freezeTableName: true // Evita que o Sequelize tente pluralizar o nome da tabela
  }
)

export default Task