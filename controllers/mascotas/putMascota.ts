import { Request, Response } from "express";
import { Mascota } from "../../models";

export const putMascota = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const mascota = await Mascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({
        msg: "No existe un mascota con el id " + id,
      });
    }

    await mascota.update(body);

    res.json(mascota);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
