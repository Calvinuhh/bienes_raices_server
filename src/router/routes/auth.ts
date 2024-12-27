import { Router } from "express";
import {
  loginController,
  registerController,
  recoverPasswordController,
} from "../../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/login", loginController);
authRouter.post("/registro", registerController);
authRouter.post("/recuperar_password", recoverPasswordController);

export default authRouter;
