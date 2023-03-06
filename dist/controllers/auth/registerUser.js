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
exports.registerUser = void 0;
const models_1 = require("../../models");
const bycript_1 = require("../../utils/bycript");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_usu, apellido_usu, telefono_usu, direccion_usu, email_usu, password_usu, create_at, update_at, } = req.body;
    try {
        const existeEmail = yield models_1.Usuario.findOne({
            where: {
                email_usu,
            },
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: "Ya existe un usuario con el email " + email_usu,
            });
        }
        const passwordHash = (0, bycript_1.encrypt)(password_usu);
        const usuario = models_1.Usuario.build({
            nombre_usu,
            apellido_usu,
            telefono_usu,
            direccion_usu,
            email_usu,
            password_usu: passwordHash,
            create_at,
            update_at,
        });
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=registerUser.js.map