"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAuth = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routerAuth = (0, express_1.Router)();
exports.routerAuth = routerAuth;
routerAuth.post("/login", controllers_1.loginUser);
routerAuth.post("/register", controllers_1.registerUser);
//# sourceMappingURL=auth.js.map