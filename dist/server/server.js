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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../db");
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
            auth: "/api/auth",
            citas: "/api/citas",
            productos: "/api/productos",
            mascotas: "/api/mascotas",
            categorias: "/api/categorias",
            roles: "/api/roles",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.dbConnection().then();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.db.authenticate();
                console.log("Base de datos 'Veterinaria' conectada");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, routes_1.routerUsuario);
        this.app.use(this.apiPaths.auth, routes_1.routerAuth);
        this.app.use(this.apiPaths.citas, routes_1.routerCita);
        this.app.use(this.apiPaths.productos, routes_1.routerProducto);
        this.app.use(this.apiPaths.mascotas, routes_1.routerMascota);
        this.app.use(this.apiPaths.categorias, routes_1.routerCategoria);
        this.app.use(this.apiPaths.roles, routes_1.routerRol);
    }
    listen() {
        this.app.listen(this.port, () => console.log("Servidor 'Veterinaria' en linea 👍, en puerto " + this.port));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map