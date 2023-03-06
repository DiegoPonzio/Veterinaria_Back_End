import express, { Application } from "express";
import cors from "cors";
import { db } from "../db";
import {
  routerCategoria,
  routerAuth,
  routerCita,
  routerProducto,
  routerMascota,
  routerUsuario,
  routerRol,
} from "../routes";

class Server {
  private app: Application;
  private readonly port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    auth: "/api/auth",
    citas: "/api/citas",
    productos: "/api/productos",
    mascotas: "/api/mascotas",
    categorias: "/api/categorias",
    roles: "/api/roles",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection().then();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Base de datos 'Veterinaria' conectada");
    } catch (error) {
      throw new Error(error as string);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, routerUsuario);
    this.app.use(this.apiPaths.auth, routerAuth);
    this.app.use(this.apiPaths.citas, routerCita);
    this.app.use(this.apiPaths.productos, routerProducto);
    this.app.use(this.apiPaths.mascotas, routerMascota);
    this.app.use(this.apiPaths.categorias, routerCategoria);
    this.app.use(this.apiPaths.roles, routerRol);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Servidor 'Veterinaria' en linea 👍, en puerto " + this.port)
    );
  }
}

export default Server;
