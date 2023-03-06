import { DataTypes } from "sequelize";
import { db } from "../db";
import { Especie, MascotaUsuario } from "./";

const Mascota = db.define(
  "Mascotas",
  {
    id_mas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: MascotaUsuario,
        key: "id_mas",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    nombre_mas: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    edad_mas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sexo_mas: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_esp: {
      type: DataTypes.INTEGER,
      references: {
        model: Especie,
        key: "id_esp",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "mascota",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

Mascota.sync({ force: false }).then(() => {
  console.log("Tabla Mascota creada");
});

export { Mascota };
