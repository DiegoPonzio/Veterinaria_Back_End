import { DataTypes } from "sequelize";
import { db } from "../db";

const Veterinaria = db.define("Veterinarias", {
  id_vet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_vet: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  telefono_vet: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  direccion_vet: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email_vet: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  create_at: {
    type: DataTypes.DATE(6),
    allowNull: false,
  },
  update_at: {
    type: DataTypes.DATE(6),
    allowNull: false,
  },
});

Veterinaria.sync({ force: false }).then(() => {
  console.log("Tabla Veterinaria creada");
});

export { Veterinaria };
