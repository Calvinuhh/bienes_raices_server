export default interface UserModel {
  id?: string;
  name: string;
  email: string;
  password: string;
  token?: string;
  confirmed?: boolean;
}
