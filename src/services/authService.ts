import { RegisterDTO } from "../interfaces/DTOs/userDTOs";
import User from "../models/User";
import { checkEmailExists } from "../utils/checkEmailExists";

export const createUser = async (data: RegisterDTO) => {
  const { email, name, password } = data;

  await checkEmailExists(email);

  const newUser = await User.create({ email, name, password });

  return newUser;
};
