import { Request, Response } from "express";
import { Producto } from "../../models";

export const postProducto = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const producto = Producto.build(body);
    await producto.save();

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
