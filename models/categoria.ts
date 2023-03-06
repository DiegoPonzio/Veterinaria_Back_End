import { DataTypes } from "sequelize";
import { db } from "../db";

const Categoria = db.define(
  "Categorias",
  {
    id_cat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_cat: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_cat: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado_cat: {
      type: DataTypes.STRING(90),
      allowNull: false,
    },
    imagen_cat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "categoria",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Categoria.sync({ force: false }).then(() => {
  console.log("Tabla Categoria creada");
});

export { Categoria };
