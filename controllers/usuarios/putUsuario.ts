import { Request, Response } from "express";
import { Usuario } from "../../models";

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }

    await usuario.update(body);

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};