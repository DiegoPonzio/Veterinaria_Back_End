import { Request, Response } from "express";
import { Producto } from "../../models";

export const putProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        msg: "No existe un producto con el id " + id,
      });
    }

    await producto.update(body);

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
