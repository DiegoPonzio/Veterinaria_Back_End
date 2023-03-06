import { Router } from "express";
import { loginUser, registerUser } from "../controllers";

const routerAuth = Router();

routerAuth.post("/login", loginUser);
routerAuth.post("/register", registerUser);

export { routerAuth };
