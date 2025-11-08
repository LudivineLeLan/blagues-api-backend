import { Router } from "express";
import { jokeController } from '../controllers/index.js';

export const jokeRouter = Router();

jokeRouter.post('/blagues', jokeController.uploadJoke);
jokeRouter.get('/blagues', jokeController.getAllJokes);
jokeRouter.get('/blagues/random', jokeController.getRandomJoke);
jokeRouter.get('/blagues/:id', jokeController.getJokeById);


