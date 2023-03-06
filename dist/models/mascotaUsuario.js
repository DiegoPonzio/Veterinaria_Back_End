"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaUsuario = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const MascotaUsuario = db_1.db.define("MascotasUsuarios", {
    id_mas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usu: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Usuario,
            key: "id_usu",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    id_reg: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "mascota-usuario",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.MascotaUsuario = MascotaUsuario;
MascotaUsuario.sync({ force: false }).then(() => {
    console.log("Tabla MascotaUsuario creada");
});
//# sourceMappingURL=mascotaUsuario.js.map