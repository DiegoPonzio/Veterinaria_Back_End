import { Request, Response } from "express";
import { Cita } from "../../models";

export const getCitas = async (_req: Request, res: Response) => {
  const cita = await Cita.findAll();

  res.json(cita);
};
