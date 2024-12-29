import UserModel from "../user";

export interface RegisterDTO
  extends Omit<UserModel, "id" | "token" | "confirmed"> {
  repetir_password?: string;
}

export interface UpdatePasswordMiddleware extends Pick<UserModel, "password"> {
  repetir_password: string;
}

export type ChangePasswordDTO = Pick<UserModel, "password" | "token">;

export type LoginDTO = Pick<UserModel, "email" | "password">;

export type Email = Pick<UserModel, "email">;

export type Token = Pick<UserModel, "token">;
