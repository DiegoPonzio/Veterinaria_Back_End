import { Request, Response } from "express";
import { Mascota } from "../../models";

export const getMascotas = async (_req: Request, res: Response) => {
  const mascota = await Mascota.findAll();

  res.json(mascota);
};
