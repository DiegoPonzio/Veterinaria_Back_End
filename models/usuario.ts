import { DataTypes } from "sequelize";
import { db } from "../db";
const Usuario = db.define(
  "Usuario",
  {
    id_usu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    apellido_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    telefono_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    direccion_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    empleado_usu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Usuario.sync({ force: false }).then(() => {
  console.log("Tabla Usuario creada");
});

export { Usuario };
