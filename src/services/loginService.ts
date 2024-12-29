import User from "../models/User";
import { checkPassword } from "../utils/checkAndHashPassword";
import { generateJWT } from "../utils/jwt";

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw Error("El usuario no existe");

  if (!user.confirmed) throw Error("El usuario no ha confirmado su email");

  const check = await checkPassword(password, user.password);

  if (!check) throw Error("Datos incorrectos");

  if (check) return generateJWT({ id: user.id });
};
