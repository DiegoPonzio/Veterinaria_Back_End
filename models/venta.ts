import { DataTypes } from "sequelize";
import { db } from "../db";

const Venta = db.define("Ventas", {
  id_ven: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad_ven: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_ven: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  iva_ven: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ieps_ven: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  create_at: {
    type: DataTypes.DATE(6),
    allowNull: false,
  },
  update_at: {
    type: DataTypes.DATE(6),
    allowNull: false,
  },
});

Venta.sync({ force: false }).then(() => {
  console.log("Tabla Venta creada");
});

export { Venta };
