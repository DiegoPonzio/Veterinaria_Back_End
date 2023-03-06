"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raza = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const Raza = db_1.db.define("Razas", {
    id_raza: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_raza: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    id_esp: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Especie,
            key: "id_esp",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    tableName: "raza",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Raza = Raza;
Raza.sync({ force: false }).then(() => {
    console.log("Tabla Raza creada");
});
//# sourceMappingURL=raza.js.map