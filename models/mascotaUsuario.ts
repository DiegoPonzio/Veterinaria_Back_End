import { DataTypes } from "sequelize";
import { db } from "../db";
import { Usuario } from "./";

const MascotaUsuario = db.define(
  "MascotasUsuarios",
  {
    id_mas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    id_reg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "mascota-usuario",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

MascotaUsuario.sync({ force: false }).then(() => {
  console.log("Tabla MascotaUsuario creada");
});

export { MascotaUsuario };
