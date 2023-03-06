"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMascota = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerMascota = (0, express_1.Router)();
exports.routerMascota = routerMascota;
routerMascota.get("/", controllers_1.getMascota);
routerMascota.get("/:id", controllers_1.getMascotas);
routerMascota.post("/", controllers_1.postMascota);
routerMascota.put("/:id", controllers_1.putMascota);
routerMascota.delete("/:id", controllers_1.deleteMascota);
//# sourceMappingURL=mascota.js.map