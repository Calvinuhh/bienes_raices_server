import { Router } from "express";
import {
  loginController,
  registerController,
  recoverPasswordController,
  confirmAccountController,
} from "../../controllers/authController";

import { validateRegister } from "../../middlewares/inputValidations";

const authRouter: Router = Router();

authRouter.post("/login", loginController);
authRouter.post("/registro", validateRegister, registerController);
authRouter.post("/recuperar_contraseña", recoverPasswordController);
authRouter.get("/token/:token", confirmAccountController);

export default authRouter;
