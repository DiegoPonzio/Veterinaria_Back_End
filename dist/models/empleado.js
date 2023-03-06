"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const Empleado = db_1.db.define("Empleados", {
    id_emp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_vet: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Veterinaria,
            key: "id_vet",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    sue_emp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    entrada_emp: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    salida_emp: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
}, {
    tableName: "empleado",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Empleado = Empleado;
Empleado.sync({ force: false }).then(() => {
    console.log("Tabla Empleado creada");
});
//# sourceMappingURL=empleado.js.map