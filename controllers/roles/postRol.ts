import { Request, Response } from "express";
import { Rol } from "../../models";

export const postRol = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const rol = Rol.build(body);
    await rol.save();

    res.json(rol);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
