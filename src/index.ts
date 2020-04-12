import express from "express";
import compression from "compression";
import redis from "redis";
import {} from "./GameEngine/index.js";

const app = express();
app.use(compression());
const port = process.env.PORT || 8080;
const redisUrl: string = process.env.REDIS_URL || "";
const redisClient = redisUrl
  ? redis.createClient(redisUrl)
  : null;

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/status", (req, res) => res.send({ status: "UP" }));

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
  console.log(`Also the redis url is REDIS_URL: ${process.env.REDIS_URL}`);
});
