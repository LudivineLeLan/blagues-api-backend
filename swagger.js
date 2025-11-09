import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blagues API",
      version: "1.0.0",
      description: "API pour gérer les blagues",
    },
    servers: [
      { url: "https://blagues-api-backend.onrender.com" }
    ],
  },
  apis: ["./routers/joke.router.js"],
};

const swaggerSpec = swaggerJsDoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
