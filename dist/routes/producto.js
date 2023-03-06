"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProducto = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerProducto = (0, express_1.Router)();
exports.routerProducto = routerProducto;
routerProducto.get("/", controllers_1.getProductos);
routerProducto.get("/:id", controllers_1.getProducto);
routerProducto.post("/", controllers_1.postProducto);
routerProducto.put("/:id", controllers_1.putProducto);
routerProducto.delete("/:id", controllers_1.deleteProducto);
//# sourceMappingURL=producto.js.map