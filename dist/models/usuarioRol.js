"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRol = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const UsuarioRol = db_1.db.define("UsuariosRoles", {
    id_usu: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: _1.Usuario,
            key: "id_usu",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: _1.Rol,
            key: "id_rol",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    tableName: "usuario_rol",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.UsuarioRol = UsuarioRol;
UsuarioRol.sync({ force: false }).then(() => {
    console.log("Tabla UsuarioRol creada");
});
//# sourceMappingURL=usuarioRol.js.map