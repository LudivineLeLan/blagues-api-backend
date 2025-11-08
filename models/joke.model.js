import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Joke extends Model { }

Joke.init(
  {
    question: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "jokes",
    underscored: true,
  }
);
