import { Sequelize } from "sequelize";

export const db = new Sequelize("veterinaria", "root", "99310675", {
  host: "localhost",
  dialect: "mysql",
});
