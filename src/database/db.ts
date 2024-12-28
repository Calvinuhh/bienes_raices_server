import { Sequelize } from "sequelize-typescript";
import User from "../models/User";

process.loadEnvFile();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env as {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_NAME: string;
};

const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
  models: [User],
});

export default database;
