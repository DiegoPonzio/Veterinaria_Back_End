"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Usuario = db_1.db.define("Usuario", {
    id_usu: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    apellido_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    telefono_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    direccion_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    email_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    password_usu: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    empleado_usu: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: "usuario",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Usuario = Usuario;
Usuario.sync({ force: false }).then(() => {
    console.log("Tabla Usuario creada");
});
//# sourceMappingURL=usuario.js.map