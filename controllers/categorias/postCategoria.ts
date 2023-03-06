import { Request, Response } from "express";
import { Categoria } from "../../models";

export const postCategoria = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeNombre = await Categoria.findOne({
      where: {
        nombre_cat: body.nombre_cat,
      },
    });

    if (existeNombre) {
      return res.status(400).json({
        msg: "Ya existe una categoria con el nombre " + body.nombre,
      });
    }

    const categoria = Categoria.build(body);
    await categoria.save();

    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
