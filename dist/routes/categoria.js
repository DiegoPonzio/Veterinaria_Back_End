"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCategoria = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerCategoria = (0, express_1.Router)();
exports.routerCategoria = routerCategoria;
routerCategoria.get("/", controllers_1.getCategorias);
routerCategoria.get("/:id", controllers_1.getCategoria);
routerCategoria.post("/", controllers_1.postCategoria);
routerCategoria.put("/:id", controllers_1.putCategoria);
routerCategoria.delete("/:id", controllers_1.deleteCategoria);
//# sourceMappingURL=categoria.js.map