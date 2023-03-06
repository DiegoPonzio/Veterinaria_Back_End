import { Router } from "express";
import { check } from "express-validator";
import {
  getCategoria,
  getCategorias,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from "../controllers";

const routerCategoria = Router();

routerCategoria.get("/", getCategorias);
routerCategoria.get("/:id", getCategoria);
routerCategoria.post("/", postCategoria);
routerCategoria.put("/:id", putCategoria);
routerCategoria.delete("/:id", deleteCategoria);

export { routerCategoria };
