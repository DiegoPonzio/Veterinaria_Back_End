import { DataTypes } from "sequelize";
import { db } from "../db";
import { Categoria } from "./";

const Producto = db.define(
  "Productos",
  {
    id_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_pro: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    marca_pro: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    precio_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion_pro: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado_pro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imagen_pro: {
      type: DataTypes.STRING(90),
      allowNull: false,
    },
    id_cat: {
      type: DataTypes.INTEGER,
      references: {
        model: Categoria,
        key: "id_cat",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "producto",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Producto.sync({ force: false }).then(() => {
  console.log("Tabla Producto creada");
});

export { Producto };
