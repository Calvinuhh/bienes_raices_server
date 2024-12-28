import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export const checkPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isPasswordCorrect = await compare(password, hashedPassword);
  return isPasswordCorrect;
};
