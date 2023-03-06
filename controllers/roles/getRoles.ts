import { Request, Response } from "express";
import { Rol } from "../../models";

export const getRoles = async (_req: Request, res: Response) => {
  const roles = await Rol.findAll();
  res.json(roles);
};
