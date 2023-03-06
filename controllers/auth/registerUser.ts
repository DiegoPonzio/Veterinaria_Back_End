import { Request, Response } from "express";
import { Usuario } from "../../models";
import { encrypt } from "../../utils/bycript";

export const registerUser = async (req: Request, res: Response) => {
  const {
    nombre_usu,
    apellido_usu,
    telefono_usu,
    direccion_usu,
    email_usu,
    password_usu,
    create_at,
    update_at,
  } = req.body;

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email_usu,
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: "Ya existe un usuario con el email " + email_usu,
      });
    }

    const passwordHash = encrypt(password_usu);

    const usuario = Usuario.build({
      nombre_usu,
      apellido_usu,
      telefono_usu,
      direccion_usu,
      email_usu,
      password_usu: passwordHash,
      create_at,
      update_at,
    });
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
