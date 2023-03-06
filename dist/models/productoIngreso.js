"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoIngreso = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const ProductoIngreso = db_1.db.define("ProdIngresos", {
    id_prod: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_ing: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Ingreso,
            key: "id_ing",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    tableName: "producto-ingreso",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.ProductoIngreso = ProductoIngreso;
ProductoIngreso.sync({ force: false }).then(() => {
    console.log("Tabla ProductoIngreso creada");
});
//# sourceMappingURL=productoIngreso.js.map