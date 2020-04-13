import { Model } from "sequelize";
import { sequelize } from "./";

class WebSocketConnection extends Model {}
WebSocketConnection.init({}, { sequelize, modelName: "WebSocketConnection" });

export { WebSocketConnection };
