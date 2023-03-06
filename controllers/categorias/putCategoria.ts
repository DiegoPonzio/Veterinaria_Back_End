import { Request, Response } from "express";
import { Categoria } from "../../models";

export const putCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({
        msg: "No existe una categoria con el id " + id,
      });
    }

    await categoria.update(body);

    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
