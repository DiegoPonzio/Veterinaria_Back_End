import { DataTypes } from "sequelize";
import { db } from "../db";
import { Producto, Venta } from "./";

const ProductoVenta = db.define(
  "ProductosVentas",
  {
    id_proVen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pro: {
      type: DataTypes.INTEGER,
      references: {
        model: Producto,
        key: "id_pro",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_ven: {
      type: DataTypes.INTEGER,
      references: {
        model: Venta,
        key: "id_ven",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "producto-venta",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

ProductoVenta.sync({ force: false }).then(() => {
  console.log("Tabla ProductoVenta creada");
});

export { ProductoVenta };
