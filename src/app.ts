import express, { json } from "express";
import router from "./router/router";
import cors from "cors";

//temporal
import User from "./models/User";
import { Request, Response } from "express";
/////////
process.loadEnvFile();
const { CLIENT_URL } = process.env;

const server = express();

server.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
server.use(json());

server.use(router);

//////////////////////
server.get("/temp", async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
});
////////////////////

export default server;
