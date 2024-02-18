import express from "express";
import fs from "fs";
// import bodyParser from "body-parser";
import path from "path";

const router = express.Router();
// router.use(bodyParser.json());
// router.use(express.json());
const filePath = "./data/workbook.json";
const rawData = fs.readFileSync(filePath);
const questions = JSON.parse(rawData);

router.get("/:category", (req, res) => {
  const category = req.params.category;
  const questionsOfCategory = questions.filter(
    (question) => question.category === category
  );
  res.json(questionsOfCategory);
});

router.patch("/:questionId", (req, res) => {
  const questionId = req.params.questionId;
  const { answer } = req.body;

  if (!answer) {
    return res.status(400).json({ error: "Answer is required" });
  }

  const question = questions.find((q) => q.id === parseInt(questionId));
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }

  question.answer = answer;

  fs.writeFile(filePath, JSON.stringify(questions, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Unable to update question" });
    }
    res.json(question);
  });
});


export default router;
