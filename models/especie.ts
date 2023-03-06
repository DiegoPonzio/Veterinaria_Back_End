import { DataTypes } from "sequelize";
import { db } from "../db";

const Especie = db.define(
  "Especies",
  {
    id_esp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_esp: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "especie",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Especie.sync({ force: false }).then(() => {
  console.log("Tabla Especie creada");
});

export { Especie };
