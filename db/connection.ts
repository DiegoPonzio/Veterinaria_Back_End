import { Sequelize } from "sequelize";

export const db = new Sequelize("railway", "root", "SeQhNDRxXm7q1LMq6mJX", {
  host: "containers-us-west-125.railway.app",
  port: 5634,
  dialect: "mysql",
});
