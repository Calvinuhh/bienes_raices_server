import { Router, Request, Response } from "express";

const testRouter: Router = Router();

testRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json("Probando la ruta /test");
});

export default testRouter;
