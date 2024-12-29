import { JwtPayload, sign, verify } from "jsonwebtoken";

process.loadEnvFile();
const { JWT_SECRET } = process.env as { JWT_SECRET: string };

export const generateJWT = (payload: JwtPayload) => {
  return sign(payload, JWT_SECRET, { expiresIn: "2h" });
};

export const verifyJWT = (token: string) => {
  return verify(token, JWT_SECRET);
};
