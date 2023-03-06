import { Router } from "express";
import {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers";

const routerProducto = Router();

routerProducto.get("/", getProductos);
routerProducto.get("/:id", getProducto);
routerProducto.post("/", postProducto);
routerProducto.put("/:id", putProducto);
routerProducto.delete("/:id", deleteProducto);

export { routerProducto };
