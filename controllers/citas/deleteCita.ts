import { Request, Response } from "express";
import { Cita } from "../../models";

export const deleteCita = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cita = await Cita.findByPk(id);
  if (!cita) {
    return res.status(404).json({
      msg: "No existe un cita con el id " + id,
    });
  }

  await cita.update({ estado: false });

  // await cita.destroy();

  res.json(cita);
};
