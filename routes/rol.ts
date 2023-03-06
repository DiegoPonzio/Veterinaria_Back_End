import { Router } from "express";
import { check } from "express-validator";
import {
    getRoles
} from "../controllers";

const routerRol = Router();

routerRol.get("/", getRoles);
// routerUsuario.get("/:id", getUsuario);
// routerUsuario.post("/", postUsuario);
// routerUsuario.put("/:id", putUsuario);
// routerUsuario.delete("/:id", deleteUsuario);

export { routerRol };