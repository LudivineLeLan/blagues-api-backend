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

app.use(apiRouter);

setupSwagger(app);


app.listen(PORT, () => {
  console.log(`API launched on http://localhost:${PORT}`);
});