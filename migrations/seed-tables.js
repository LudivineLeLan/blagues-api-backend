import { Joke, sequelize } from "../models/index.js";

console.log("Seeding des tables...");

const joke1 = await Joke.create({ question: "Quelle est la femelle du hamster ?", answer: "L’Amsterdam" });
const joke2 = await Joke.create({ question: "Que dit un oignon quand il se cogne ?", answer: "Aïe" });
const joke3 = await Joke.create({ question: "Quel est l'animal le plus heureux ?", answer: "Le hibou, parce que sa femme est chouette." });
const joke4 = await Joke.create({ question: "Pourquoi le football c'est rigolo ?", answer: "Parce que Thierry en rit" });
const joke5 = await Joke.create({ question: "Quel est le sport le plus fruité ?", answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." });
const joke6 = await Joke.create({ question: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" });

console.log("Seeding terminé avec succès");
await sequelize.close();