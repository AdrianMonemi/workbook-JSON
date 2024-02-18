import express from "express";
import cors from "cors";
import fs from "fs";

import router, { default as questionsRouter } from "./routes/questions.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/questions", questionsRouter);

app.get("/", (req, res) => {
  const homePage = fs.readFileSync("./public/index.html", { encoding: "utf-8" });
  res.send(homePage);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
