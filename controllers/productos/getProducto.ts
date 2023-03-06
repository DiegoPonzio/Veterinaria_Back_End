import { Request, Response } from "express";
import { Producto } from "../../models";

export const getProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  const producto = await Producto.findByPk(id);

  if (!producto) {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  } else {
    res.json(producto);
  }
};
