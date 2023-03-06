import { Request, Response } from "express";
import { Usuario } from "../../models";

export const getUsuarios = async (_req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();

    res.json(usuarios);
};