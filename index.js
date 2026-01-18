import "dotenv/config";
import express from "express";
import cors from "cors";
import { apiRouter } from "./routers/index.js";
import { setupSwagger } from "./swagger.js";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use(apiRouter);

setupSwagger(app);

app.get("/", (req, res) => {
  res.send(`
    <h1>CARAMBAR & CO </h1>
    <p>Bienvenue !</p>
    <p><a href="/api-docs">Voir la documentation Swagger</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`API launched on http://localhost:${PORT}`);
});