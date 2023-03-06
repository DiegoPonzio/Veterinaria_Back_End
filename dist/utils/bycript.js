"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encrypt = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const encrypt = (password) => bcryptjs_1.default.hashSync(password, 10);
exports.encrypt = encrypt;
const compare = (password, hash) => bcryptjs_1.default.compareSync(password, hash);
exports.compare = compare;
//# sourceMappingURL=bycript.js.map