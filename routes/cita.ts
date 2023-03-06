import { Router } from "express";
import {
  getCitas,
  getCita,
  postCita,
  putCita,
  deleteCita,
} from "../controllers";

const routerCita = Router();

routerCita.get("/", getCitas);
routerCita.get("/:id", getCita);
routerCita.post("/", postCita);
routerCita.put("/:id", putCita);
routerCita.delete("/:id", deleteCita);

export { routerCita };
