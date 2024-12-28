import { Request, Response } from "express";
import {
  LoginDTO,
  RecoverPasswordDTO,
  RegisterDTO,
} from "../interfaces/DTOs/userDTOs";
import { createUser } from "../services/authService";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginDTO = req.body;
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: RegisterDTO = req.body;

    const newUser = await createUser({
      name,
      email,
      password,
    });

    if (newUser) res.status(201).json("Usuario creado con éxito");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const recoverPasswordController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email }: RecoverPasswordDTO = req.body;
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
