import { Request, Response } from "express";
import { Categoria } from "../../models";



export const getCategoria = async (req: Request, res: Response) => {
    const { id } = req.params;

    const categoria = await Categoria.findByPk(id);

    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).json({
            msg: `No existe una categoria con el id ${id}`,
        });
    }
};