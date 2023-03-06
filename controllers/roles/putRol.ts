import { Request, Response } from "express";
import { Rol } from "../../models";

export const putRol = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const rol = await Rol.findByPk(id);
    if (!rol) {
      return res.status(404).json({
        msg: "No existe un rol con el id " + id,
      });
    }

    await rol.update(body);

    res.json(rol);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
