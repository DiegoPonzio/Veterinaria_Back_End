"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const Producto = db_1.db.define("Productos", {
    id_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_pro: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    marca_pro: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    precio_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    stock_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion_pro: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    estado_pro: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    imagen_pro: {
        type: sequelize_1.DataTypes.STRING(90),
        allowNull: false,
    },
    id_cat: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Categoria,
            key: "id_cat",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    tableName: "producto",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Producto = Producto;
Producto.sync({ force: false }).then(() => {
    console.log("Tabla Producto creada");
});
//# sourceMappingURL=producto.js.map