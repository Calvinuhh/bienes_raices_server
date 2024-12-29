import User from "../models/User";
import { enviarEmailRecuperarContraseña } from "../email/email";
import { hashPassword, checkPassword } from "../utils/checkAndHashPassword";

export const sendEmailRecoverPassword = async (email: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw Error("Email no encontrado");

  user.token =
    Math.random().toString(36).substring(2) + Date.now().toString(36);
  user.save();

  await enviarEmailRecuperarContraseña(user.email, user.token);

  return "Revisa tu correo para más instrucciones.";
};

export const deleteTokenAfterChangePassword = async (
  token: string,
  password: string
) => {
  const user = await User.findOne({ where: { token } });

  if (!user) throw Error("Token inválido");

  if (await checkPassword(password, user.password))
    throw Error("La contraseña no puede ser igual");

  user.token = "";
  user.password = await hashPassword(password);

  await user.save();
};
