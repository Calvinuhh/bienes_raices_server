import { Router } from "express";
import {
  loginController,
  registerController,
  recoverPasswordController,
} from "../../controllers/authController";

import { validateRegister } from "../../middlewares/inputValidations";

const authRouter: Router = Router();

authRouter.post("/login", loginController);
authRouter.post("/registro", validateRegister, registerController);
authRouter.post("/recuperar_contraseña", recoverPasswordController);

export default authRouter;
