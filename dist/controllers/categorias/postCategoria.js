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
exports.postCategoria = void 0;
const models_1 = require("../../models");
const postCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeNombre = yield models_1.Categoria.findOne({
            where: {
                nombre_cat: body.nombre_cat,
            },
        });
        if (existeNombre) {
            return res.status(400).json({
                msg: "Ya existe una categoria con el nombre " + body.nombre,
            });
        }
        const categoria = models_1.Categoria.build(body);
        yield categoria.save();
        res.json(categoria);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postCategoria = postCategoria;
//# sourceMappingURL=postCategoria.js.map