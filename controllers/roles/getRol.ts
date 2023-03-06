import { Request, Response } from "express";
import { Rol } from "../../models";

export const getRol = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rol = await Rol.findByPk(id);

  if (!rol) {
    res.status(404).json({
      msg: `No existe un rol con el id ${id}`,
    });
  } else {
    res.json(rol);
  }
};
