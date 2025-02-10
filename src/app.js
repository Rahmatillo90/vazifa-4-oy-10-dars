import express from "express";
import Router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(...Router());

app.get("/", (req, res) => {
  console.log("sorov keldi", req);
  res.send("API is working");
});

app.listen(4000, () => {
  console.log("server running port", 4000);
});
