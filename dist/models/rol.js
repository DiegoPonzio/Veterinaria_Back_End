"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Rol = db_1.db.define("Roles", {
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_rol: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    tableName: "rol",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Rol = Rol;
Rol.sync({ force: false }).then(() => {
    console.log("Tabla Rol creada");
});
//# sourceMappingURL=rol.js.map