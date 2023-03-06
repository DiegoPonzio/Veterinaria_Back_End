import { DataTypes } from "sequelize";
import { db } from "../db";
import { Mascota } from "./";

const Cita = db.define(
  "Citas",
  {
    id_cit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_mas: {
      type: DataTypes.INTEGER,
      references: {
        model: Mascota,
        key: "id_mas",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    fecha_cit: {
      type: DataTypes.DATE(6),
      allowNull: false,
    },
    hora_cit: {
      type: DataTypes.TIME(),
      allowNull: false,
    },
  },
  {
    tableName: "cita",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Cita.sync({ force: false }).then(() => {
  console.log("Tabla Cita creada");
});

export { Cita };
