import { Request, Response } from "express";
import { LoginDTO } from "../interfaces/DTOs/userDTOs";
import { login } from "../services/loginService";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginDTO = req.body;

    const token = await login(email, password);

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json("Login exitoso");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
