import { Request, Response } from "express";
import { LoginDTO } from "../interfaces/DTOs/userDTOs";
import { login } from "../services/loginService";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginDTO = req.body;

    res.status(200).json(await login(email, password));
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
