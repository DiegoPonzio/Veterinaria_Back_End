"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingreso = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Ingreso = db_1.db.define("Ingresos", {
    id_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    lote_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    fechaCompra_ing: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    fechaCaducidad_ing: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    fechaLlegada_ing: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    cantidad_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precioCompra_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precioVenta_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precioMayoreo_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoComprobante_ing: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    numeroComprobante_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    numComprobante_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    serieComprobante_ing: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    tableName: "ingreso",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Ingreso = Ingreso;
Ingreso.sync({ force: false }).then(() => {
    console.log("Tabla Ingreso creada");
});
//# sourceMappingURL=ingreso.js.map