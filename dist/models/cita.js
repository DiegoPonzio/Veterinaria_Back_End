"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const Cita = db_1.db.define("Citas", {
    id_cit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_mas: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: _1.Mascota,
            key: "id_mas",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    fecha_cit: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    hora_cit: {
        type: sequelize_1.DataTypes.TIME(),
        allowNull: false,
    },
}, {
    tableName: "cita",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Cita = Cita;
Cita.sync({ force: false }).then(() => {
    console.log("Tabla Cita creada");
});
//# sourceMappingURL=cita.js.map