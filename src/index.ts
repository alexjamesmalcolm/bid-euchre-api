import express from "express";
import expressWs from "express-ws";
import compression from "compression";
import redis from "redis";
import {} from "./GameEngine/index.js";
import { sequelize } from "./models";

const { app } = expressWs(express());
app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 8080;
const redisUrl: string = process.env.REDIS_URL || "";
const redisClient = redisUrl ? redis.createClient(redisUrl) : null;

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

interface WebSocketMessage {
  type: string;
  userId: number;
}

const getAccessToken = (req: express.Request): string => {
  const secWebSocketProtocolHeader: string =
    req.headers["sec-websocket-protocol"]?.toString() || "";
  const accessToken: string = secWebSocketProtocolHeader.slice(14);
  return accessToken;
};

app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    ws.send(msg);
  });
  // ws.on("open", (msg) => {
  // db.WebSocketConnection.create({})
  // });
});

app.get("/status", (req, res) => res.send({ status: "UP" }));

app
  .route("/authorization")
  .get((req, res) => {
    res.send("WIP");
  })
  .post((req, res) => {
    res.send("WIP");
  });

app.route("/user").get((req, res) => {
  // res.send(User.findAll());
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
  console.log(`Also the redis url is REDIS_URL: ${process.env.REDIS_URL}`);
});
