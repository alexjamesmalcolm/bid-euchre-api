import { Model } from "sequelize";
import { sequelize } from "./";

class Lobby extends Model {}
Lobby.init({}, { sequelize, modelName: "Lobby" });

export { Lobby };
