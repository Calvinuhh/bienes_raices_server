import UserModel from "../user";

export interface RegisterDTO extends Omit<UserModel, "id" | "token"> {
  repetir_password?: string;
}
export type LoginDTO = Pick<UserModel, "email" | "password">;

export type RecoverPasswordDTO = Pick<UserModel, "email">;
