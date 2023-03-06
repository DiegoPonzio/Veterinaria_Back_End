import { Request, Response } from "express";
import { Cita } from "../../models";

export const postCita = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const cita = Cita.build(body);
    await cita.save();

    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
