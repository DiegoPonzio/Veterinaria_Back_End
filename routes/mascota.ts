import { Router } from "express";
import {
  getMascota,
  getMascotas,
  postMascota,
  putMascota,
  deleteMascota,
} from "../controllers";

const routerMascota = Router();

routerMascota.get("/", getMascota);
routerMascota.get("/:id", getMascotas);
routerMascota.post("/", postMascota);
routerMascota.put("/:id", putMascota);
routerMascota.delete("/:id", deleteMascota);

export { routerMascota };
