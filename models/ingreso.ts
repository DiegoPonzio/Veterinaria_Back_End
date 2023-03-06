import { DataTypes } from "sequelize";
import { db } from "../db";

const Ingreso = db.define(
  "Ingresos",
  {
    id_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lote_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaCompra_ing: {
      type: DataTypes.DATE(6),
      allowNull: false,
    },
    fechaCaducidad_ing: {
      type: DataTypes.DATE(6),
      allowNull: false,
    },
    fechaLlegada_ing: {
      type: DataTypes.DATE(6),
      allowNull: false,
    },
    cantidad_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioCompra_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioVenta_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioMayoreo_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoComprobante_ing: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    numeroComprobante_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numComprobante_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serieComprobante_ing: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "ingreso",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Ingreso.sync({ force: false }).then(() => {
  console.log("Tabla Ingreso creada");
});

export { Ingreso };