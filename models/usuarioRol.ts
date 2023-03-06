import { DataTypes } from "sequelize";
import { db } from "../db";
import { Usuario, Rol } from "./";

const UsuarioRol = db.define(
  "UsuariosRoles",
  {
    id_usu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Usuario,
        key: "id_usu",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Rol,
        key: "id_rol",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "usuario_rol",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

UsuarioRol.sync({ force: false }).then(() => {
  console.log("Tabla UsuarioRol creada");
});

export { UsuarioRol };
