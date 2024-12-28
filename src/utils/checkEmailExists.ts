import User from "../models/User";

export const checkEmailExists = async (email: string) => {
  const user = await User.findOne({ where: { email } });

  if (user) throw Error("El email ya está registrado");
};
