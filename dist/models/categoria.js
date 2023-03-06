"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Categoria = db_1.db.define("Categorias", {
    id_cat: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_cat: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    descripcion_cat: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    estado_cat: {
        type: sequelize_1.DataTypes.STRING(90),
        allowNull: false,
    },
    imagen_cat: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "categoria",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Categoria = Categoria;
Categoria.sync({ force: false }).then(() => {
    console.log("Tabla Categoria creada");
});
//# sourceMappingURL=categoria.js.map