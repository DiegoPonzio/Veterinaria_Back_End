import { Router } from "express";
import { check } from "express-validator";
import {
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
  deleteUsuario,
} from "../controllers";

const routerUsuario = Router();

routerUsuario.get("/", getUsuarios);
routerUsuario.get("/:id", getUsuario);
routerUsuario.post("/", postUsuario);
routerUsuario.put("/:id", putUsuario);
routerUsuario.delete("/:id", deleteUsuario);

export { routerUsuario };
