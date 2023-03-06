import { Request, Response } from "express";
import { Producto } from "../../models";

export const deleteProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  const producto = await Producto.findByPk(id);
  if (!producto) {
    return res.status(404).json({
      msg: "No existe un producto con el id " + id,
    });
  }

  await producto.update({ estado: false });

  // await producto.destroy();

  res.json(producto);
};
