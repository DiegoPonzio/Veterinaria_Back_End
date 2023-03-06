"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Veterinaria = db_1.db.define("Veterinarias", {
    id_vet: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_vet: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    telefono_vet: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    direccion_vet: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    email_vet: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
    update_at: {
        type: sequelize_1.DataTypes.DATE(6),
        allowNull: false,
    },
});
exports.Veterinaria = Veterinaria;
Veterinaria.sync({ force: false }).then(() => {
    console.log("Tabla Veterinaria creada");
});
//# sourceMappingURL=veterinaria.js.map