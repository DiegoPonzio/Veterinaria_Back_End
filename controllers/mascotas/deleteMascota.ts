import { Request, Response } from "express";
import { Mascota } from "../../models";

export const deleteMascota = async (req: Request, res: Response) => {
  const { id } = req.params;

  const mascota = await Mascota.findByPk(id);
  if (!mascota) {
    return res.status(404).json({
      msg: "No existe un mascota con el id " + id,
    });
  }

  await mascota.update({ estado: false });

  // await mascota.destroy();

  res.json(mascota);
};
