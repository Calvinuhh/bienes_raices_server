import { Request, Response } from "express";
import { RegisterDTO, Token } from "../interfaces/DTOs/userDTOs";
import { createUser, confirmToken, deleteToken } from "../services/authService";

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

export const confirmAccountController = async (req: Request, res: Response) => {
  try {
    const { token }: Token = req.params;

    const tokenExists = await confirmToken(token);

    if (tokenExists) res.status(200).json(tokenExists);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const deleteTokenController = async (req: Request, res: Response) => {
  try {
    const { token }: Token = req.body;

    if (token) await deleteToken(token);
    res.status(200).json("Token eliminado con éxito");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
