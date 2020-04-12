import express from "express";
const app = express();
const port = process.env.PORT || 8080;

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
