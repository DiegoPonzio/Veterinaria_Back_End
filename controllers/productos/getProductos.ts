import { Request, Response } from "express";
import { Producto } from "../../models";

export const getProductos = async (_req: Request, res: Response) => {
  const producto = await Producto.findAll();
  res.json(producto);
};
