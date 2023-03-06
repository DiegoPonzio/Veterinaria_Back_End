"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCita = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerCita = (0, express_1.Router)();
exports.routerCita = routerCita;
routerCita.get("/", controllers_1.getCitas);
routerCita.get("/:id", controllers_1.getCita);
routerCita.post("/", controllers_1.postCita);
routerCita.put("/:id", controllers_1.putCita);
routerCita.delete("/:id", controllers_1.deleteCita);
//# sourceMappingURL=cita.js.map