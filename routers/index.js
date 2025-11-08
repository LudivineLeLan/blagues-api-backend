import { Router } from "express";
import { jokeRouter } from "./joke.router.js";

export const apiRouter = Router();

apiRouter.use(jokeRouter);
