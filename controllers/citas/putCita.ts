import { Request, Response } from "express";
import { Cita } from "../../models";

export const putCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({
        msg: "No existe un cita con el id " + id,
      });
    }

    await cita.update(body);

    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
