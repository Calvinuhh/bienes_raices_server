import { Request, Response, NextFunction } from "express";
import { LoginDTO } from "../interfaces/DTOs/userDTOs";

export const loginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password }: LoginDTO = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`El campo ${key} esta vacio`);
    }

    if (!email) throw new Error("El email es requerido");
    if (!password) throw new Error("El password es requerido");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
