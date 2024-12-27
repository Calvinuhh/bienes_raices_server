import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password, repetir_password } = req.body;
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
    const { email } = req.body;
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
