"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const _1 = require("./");
const Mascota = db_1.db.define("Mascotas", {
    id_mas: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: _1.MascotaUsuario,
            key: "id_mas",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    nombre_mas: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    edad_mas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    sexo_mas: {
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
    tableName: "mascota",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
});
exports.Mascota = Mascota;
Mascota.sync({ force: false }).then(() => {
    console.log("Tabla Mascota creada");
});
//# sourceMappingURL=mascota.js.map