import { NextFunction, Request, Response } from "express";
import { securePassword } from "../utils/inputValidations";

export const changePasswordValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, repetir_password } = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`El campo ${key} esta vacio`);
    }

    if (!password) throw Error("La contraseña es requerida");
    if (!repetir_password) throw Error("Repetir password es requerida");

    securePassword(password, "password", 6);

    if (password !== repetir_password)
      throw Error("Las contraseñas no coinciden");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
