import { Request, Response } from "express";
import { Usuario } from "../../models";
export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({
      msg: "No existe un usuario con el id " + id,
    });
  }

  await usuario.update({ estado: false });

  // await usuario.destroy();

  res.json(usuario);
};
