"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize("heroku_367c3cab9e34b03", "b8b743c26b0c34", "018810c7", {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
});
//# sourceMappingURL=connection.js.map