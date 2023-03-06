"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoVenta = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const ProductoVenta = db_1.db.define("ProductosVentas", {
    id_proVen: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Producto,
            key: "id_pro",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    id_ven: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Venta,
            key: "id_ven",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    tableName: "producto-venta",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.ProductoVenta = ProductoVenta;
ProductoVenta.sync({ force: false }).then(() => {
    console.log("Tabla ProductoVenta creada");
});
//# sourceMappingURL=productoVenta.js.map