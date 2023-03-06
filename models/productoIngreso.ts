import { DataTypes } from "sequelize";
import { db } from "../db";
import { Ingreso } from "./";

const ProductoIngreso = db.define(
  "ProdIngresos",
  {
    id_prod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_ing: {
      type: DataTypes.INTEGER,
      references: {
        model: Ingreso,
        key: "id_ing",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "producto-ingreso",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

ProductoIngreso.sync({ force: false }).then(() => {
  console.log("Tabla ProductoIngreso creada");
});

export { ProductoIngreso };
