import { DataTypes } from "sequelize";
import { db } from "../db";
import { Usuario, Veterinaria } from "./";

const Empleado = db.define(
  "Empleados",
  {
    id_emp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_vet: {
      type: DataTypes.INTEGER,
      references: {
        model: Veterinaria,
        key: "id_vet",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_usu: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id_usu",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    sue_emp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entrada_emp: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    salida_emp: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "empleado",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Empleado.sync({ force: false }).then(() => {
  console.log("Tabla Empleado creada");
});

export { Empleado };
