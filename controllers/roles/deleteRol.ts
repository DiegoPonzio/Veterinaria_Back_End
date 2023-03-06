import { Request, Response } from "express";
import { Rol } from "../../models";

export const deleteRol = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rol = await Rol.findByPk(id);
  if (!rol) {
    return res.status(404).json({
      msg: "No existe un rol con el id " + id,
    });
  }

  await rol.update({ estado: false });

  // await rol.destroy();

  res.json(rol);
};
