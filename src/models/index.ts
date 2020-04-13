import { Sequelize } from "sequelize";

export const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize("sqlite::memory:");
