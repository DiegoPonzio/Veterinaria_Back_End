import { NextFunction, Request, Response } from "express";
import { Usuario } from "../models";
import { verifyToken } from "../utils/jwt";

export const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }
  try {
    // const { uid } = verifyToken(token);
    //
    // const usuario = await Usuario.findByPk(uid);
    // if (!usuario) {
    //   return res.status(401).json({
    //     msg: "Token no válido - usuario no existe en BD",
    //   });
    // }
    // req.usuario = usuario;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};
