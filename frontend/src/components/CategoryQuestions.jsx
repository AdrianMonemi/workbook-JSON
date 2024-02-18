import React, { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import { sendAnswer } from "../Data/Data";
import "./CategoryQuestions.css";

function CategoryQuestions({ activeTab, questions, onClick }) {
  const [questionsByCategory, setQuestionsByCategory] = useState([]);
  const [disabledButtonIds, setDisabledButtonIds] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  const [answerInputValue, setAnswerInputValue] = useState("");

  useEffect(() => {
    if (questions && questions.length > 0) {
      setQuestionsByCategory(
        questions.filter((question) => question.category === activeTab)
      );
    }
  }, [activeTab, questions]);

  const handleAnswerButton = (id) => {
    setButtonStates({ ...buttonStates, [id]: true });
    setDisabledButtonIds([...disabledButtonIds, id]);
  };

  const handleAnswerSubmit = async (id, answer) => {
    const newQuestions = questionsByCategory.map((q) =>
      q.id === id ? { ...q, answer } : q
    );
    setQuestionsByCategory(newQuestions);
    setButtonStates({ ...buttonStates, [id]: false });
    setDisabledButtonIds(disabledButtonIds.filter((d) => d !== id));
    await updateQuestion(id, answer);
  };

  const updateQuestion = async (id, answer) => {
    const url = `http://localhost:5000/api/questions/${id}`;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    };
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    return data;
  };

  return (
    <div>
      
      <ul>
        {questionsByCategory.map((question) => (
          <li key={question.id}>
            <p>{question.question}</p>
            <p className={question.answer !== "" ? "answered" : "notAnswered"}>
              {question.answer !== ""
                ? question.answer
                : "This question has not yet been answered"}
            </p>
            <button
              disabled={buttonStates[question.id]}
              onClick={() => handleAnswerButton(question.id)}
            >
              edit answer
            </button>{" "}
            {buttonStates[question.id] && (
              <AnswerInput
                value={question.answer}
                onChange={(e) => setAnswerInputValue(e.target.value)}
                onClick={(answer) => handleAnswerSubmit(question.id, answer)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryQuestions;
