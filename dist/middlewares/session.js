"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la petición",
        });
    }
    try {
        // const { uid } = verifyToken(token);
        //
        // const usuario = await Usuario.findByPk(uid);
        // if (!usuario) {
        //   return res.status(401).json({
        //     msg: "Token no válido - usuario no existe en BD",
        //   });
        // }
        // req.usuario = usuario;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no válido",
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=session.js.map