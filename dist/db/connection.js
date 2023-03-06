"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize("railway", "root", "SeQhNDRxXm7q1LMq6mJX", {
    host: "containers-us-west-125.railway.app",
    port: 5634,
    dialect: "mysql",
});
//# sourceMappingURL=connection.js.map