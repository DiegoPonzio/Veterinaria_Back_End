import { Request, Response } from "express";
import { Mascota } from "../../models";

export const postMascota = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const mascota = Mascota.build(body);
    await mascota.save();

    res.json(mascota);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
