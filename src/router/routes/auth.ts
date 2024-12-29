import { Router } from "express";
import {
  loginController,
  registerController,
  recoverPasswordController,
  confirmAccountController,
  deleteTokenController,
} from "../../controllers/authController";

import { validateRegister } from "../../middlewares/inputValidations";

const authRouter: Router = Router();

authRouter.post("/login", loginController);
authRouter.post("/registro", validateRegister, registerController);
authRouter.post("/recuperar_password", recoverPasswordController);
authRouter.get("/confirmacion/:token", confirmAccountController);
authRouter.patch("/borrar_token", deleteTokenController);

export default authRouter;
