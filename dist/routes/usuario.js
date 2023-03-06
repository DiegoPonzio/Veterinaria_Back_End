"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsuario = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerUsuario = (0, express_1.Router)();
exports.routerUsuario = routerUsuario;
routerUsuario.get("/", controllers_1.getUsuarios);
routerUsuario.get("/:id", controllers_1.getUsuario);
routerUsuario.post("/", controllers_1.postUsuario);
routerUsuario.put("/:id", controllers_1.putUsuario);
routerUsuario.delete("/:id", controllers_1.deleteUsuario);
//# sourceMappingURL=usuario.js.map