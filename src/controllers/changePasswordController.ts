import { Request, Response } from "express";
import { RecoverPasswordDTO } from "../interfaces/DTOs/userDTOs";
import { sendEmailRecoverPassword } from "../services/changePassword";
import { confirmToken } from "../services/authService";
import { deleteTokenAfterChangePassword } from "../services/changePassword";

export const recoverPasswordController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email }: RecoverPasswordDTO = req.body;

    res.status(200).json(await sendEmailRecoverPassword(email));
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const confirmChangePasswordToken = async (
  req: Request,
  res: Response
) => {
  try {
    const { token } = req.params;

    const tokenExists = await confirmToken(token);

    if (tokenExists) res.status(200).json(tokenExists);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const changePasswordController = async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;

    await deleteTokenAfterChangePassword(token, password);

    res.status(200).json("Contraseña cambiada con exito");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};