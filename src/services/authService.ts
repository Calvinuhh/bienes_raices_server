import { RegisterDTO } from "../interfaces/DTOs/userDTOs";
import User from "../models/User";
import { checkEmailExists } from "../utils/checkEmailExists";
import { hashPassword } from "../utils/checkAndHashPassword";
import { enviarEmail } from "../email/email";

export const createUser = async (data: RegisterDTO) => {
  const { email, name, password } = data;

  await checkEmailExists(email);

  const newUser = await User.create({
    email,
    name,
    password: await hashPassword(password),
    token: Math.random().toString(36).substring(2) + Date.now().toString(36),
  });

  if (newUser) await enviarEmail(newUser.email, newUser.name, newUser.token);

  return newUser;
};

export const confirmToken = async (token: string) => {
  const user = await User.findOne({ where: { token } });

  if (!user) throw Error("Token inválido");

  user.confirmed = true;

  await user.save();

  if (user) return true;
};



export const searchToken = (token: string) => {


};
