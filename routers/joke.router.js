import { Router } from "express";
import { jokeController } from '../controllers/index.js';

export const jokeRouter = Router();

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 */
jokeRouter.post('/blagues', jokeController.uploadJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
jokeRouter.get('/blagues', jokeController.getAllJokes);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     responses:
 *       200:
 *         description: Blague aléatoire
 */
jokeRouter.get('/blagues/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par son id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Blague via id
 *       404:
 *         description: Blague non trouvée
 */
jokeRouter.get('/blagues/:id', jokeController.getJokeById);


