import { Joke } from "../models/index.js";
import { Sequelize } from "sequelize";


export const jokeController = {
  async uploadJoke(req, res) {
    try {
      const { question, answer } = req.body;
      const joke = await Joke.create({question, answer})
      res.status(201).json(joke);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de l'ajout de la blague'" });
    }
  },

  async getAllJokes(req, res) {
    try {
      const jokes = await Joke.findAll({})
      res.status(200).json(jokes);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des blagues' });
    }
  },

  async getJokeById(req, res) {
    try {
      const joke = await Joke.findByPk(req.params.id)
      if (!joke) return res.status(404).json({ error: "Blague inexistante" });
      res.status(200).json(joke);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de la blague" });
    }
  },

  async getRandomJoke(req, res) {
    try {
      const [joke] = await Joke.findAll({
        order: Sequelize.literal("RANDOM()"),
        limit: 1,
      })
      res.status(200).json(joke)
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de la blague" });
    }
  }
}