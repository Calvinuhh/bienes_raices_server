import { Request, Response, NextFunction } from "express";
import { RegisterDTO } from "../interfaces/DTOs/userDTOs";
import {
  onlyStrings,
  securePassword,
  validateEmail,
  validateLenghtFromTo,
} from "../utils/inputValidations";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, repetir_password }: RegisterDTO = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`El campo ${key} no puede estar vacio`);
    }

    if (!name) throw Error("Hace falta el campo name");
    if (!email) throw Error("Hace falta el campo email");
    if (!password) throw Error("Hace falta el campo password");
    if (!repetir_password)
      throw Error("Hace falta el campo repetir contraseña");

    onlyStrings(name, "nombre");
    validateLenghtFromTo(name, "nombre", 2, 35);
    validateEmail(email);
    securePassword(password, "password", 6);
    if (password !== repetir_password)
      throw Error("Las contraseñas no coinciden");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
