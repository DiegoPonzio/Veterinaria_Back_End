"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRol = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerRol = (0, express_1.Router)();
exports.routerRol = routerRol;
routerRol.get("/", controllers_1.getRoles);
//# sourceMappingURL=rol.js.map