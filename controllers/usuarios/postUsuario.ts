import { Request, Response } from "express";
import { Usuario } from "../../models";

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email,
            },
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: "Ya existe un usuario con el email " + body.email,
            });
        }

        const usuario = Usuario.build(body);
        await usuario.save();

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};