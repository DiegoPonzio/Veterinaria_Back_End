import { Sequelize } from "sequelize";

export const db = new Sequelize("heroku_367c3cab9e34b03", "b8b743c26b0c34", "018810c7", {
  host: "us-cdbr-east-06.cleardb.net",
  dialect: "mysql",
});
