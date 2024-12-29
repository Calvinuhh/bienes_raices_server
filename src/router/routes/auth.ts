import { Router } from "express";
import {
  loginController,
  registerController,
  confirmAccountController,
  deleteTokenController,
} from "../../controllers/authController";

import {
  recoverPasswordController,
  confirmChangePasswordToken,
  changePasswordController,
} from "../../controllers/changePasswordController";

import { validateRegister } from "../../middlewares/inputValidations";
import {changePasswordValidation} from "../../middlewares/changePasswordValidation"

const authRouter: Router = Router();

authRouter.post("/login", loginController);

authRouter.post("/registro", validateRegister, registerController);
authRouter.get("/confirmacion/:token", confirmAccountController);
authRouter.patch("/borrar_token", deleteTokenController);

authRouter.post("/recuperar_password", recoverPasswordController);
authRouter.get("/cambiar_password/:token", confirmChangePasswordToken);
authRouter.patch("/cambiar_password", changePasswordValidation, changePasswordController);

export default authRouter;
