import { DataTypes } from "sequelize";
import { db } from "../db";
import { Especie } from "./";

const Raza = db.define(
  "Razas",
  {
    id_raza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_raza: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_esp: {
      type: DataTypes.INTEGER,
      references: {
        model: Especie,
        key: "id_esp",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "raza",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Raza.sync({ force: false }).then(() => {
  console.log("Tabla Raza creada");
});

export { Raza };
