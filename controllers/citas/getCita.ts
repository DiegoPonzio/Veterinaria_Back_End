import { Request, Response } from "express";
import { Cita } from "../../models";

export const getCita = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cita = await Cita.findByPk(id);

  if (cita) {
    res.json(cita);
  } else {
    res.status(404).json({
      msg: `No existe un cita con el id ${id}`,
    });
  }
};
