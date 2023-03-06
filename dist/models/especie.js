"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Especie = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Especie = db_1.db.define("Especies", {
    id_esp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_esp: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    tableName: "especie",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Especie = Especie;
Especie.sync({ force: false }).then(() => {
    console.log("Tabla Especie creada");
});
//# sourceMappingURL=especie.js.map