import { DataTypes } from "sequelize";
import { db } from "../db";

const Rol = db.define(
  "Roles",
  {
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_rol: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "rol",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Rol.sync({ force: false }).then(() => {
  console.log("Tabla Rol creada");
});

export { Rol };
