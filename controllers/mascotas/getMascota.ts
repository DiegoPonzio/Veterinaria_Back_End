import { Request, Response } from "express";
import { Mascota } from "../../models";

export const getMascota = async (req: Request, res: Response) => {
  const { id } = req.params;

  const mascota = await Mascota.findByPk(id);

  if (mascota) {
    res.json(mascota);
  } else {
    res.status(404).json({
      msg: `No existe un mascota con el id ${id}`,
    });
  }
};
