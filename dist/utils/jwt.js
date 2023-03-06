"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const createToken = (payload) => (0, jsonwebtoken_1.sign)(payload, JWT_SECRET, { expiresIn: "1h" });
exports.createToken = createToken;
const verifyToken = (token) => (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map