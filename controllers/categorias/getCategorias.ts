import { Request, Response } from "express";
import { Categoria } from "../../models";

export const getCategorias = async (_req: Request, res: Response) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
};
