import { Request, Response } from "express";
import { Categoria } from "../../models";

export const deleteCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;

  const categoria = await Categoria.findByPk(id);
  if (!categoria) {
    return res.status(404).json({
      msg: "No existe una categoria con el id " + id,
    });
  }

  await categoria.update({ estado: false });

  // await usuario.destroy();

  res.json(categoria);
};
