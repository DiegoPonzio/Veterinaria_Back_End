"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Venta = db_1.db.define("Ventas", {
    id_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cantidad_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precio_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    iva_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ieps_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    update_at: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
});
exports.Venta = Venta;
Venta.sync({ force: false }).then(() => {
    console.log("Tabla Venta creada");
});
//# sourceMappingURL=venta.js.map