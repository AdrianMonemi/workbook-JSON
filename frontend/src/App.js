import React, { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import { getQuestions } from "./Data/Data";
import CategoryQuestions from "./components/CategoryQuestions";

const tabs = [
  {
    label: "functional patterns",
    content: <div><CategoryQuestions activeTab="functional patterns" /></div>,
  },
  {
    label: "Web basics",
    content: <div>{<CategoryQuestions activeTab="Web basics" />}</div>,
  },
  {
    label: "Rest API: Serve and Fetch",
    content: 
      <div>{<CategoryQuestions activeTab="Rest API: Serve and Fetch" />}</div>
  },
  {
    label: "Advanced JavaScript",
    content: <div>{<CategoryQuestions activeTab="Advanced JavaScript" />}</div>,
  },
  {
    label: "React basics",
    content: <div>{<CategoryQuestions activeTab="React basics" />}</div>,
  },
  {
    label: "React patterns",
    content: <div>{<CategoryQuestions activeTab="React patterns" />}</div>,
  },
  {
    label: "Mongo & mongoose",
    content: <div>{<CategoryQuestions activeTab="Mongo & mongoose" />}</div>,
  },
  {
    label: "MERN stack",
    content: <div>{<CategoryQuestions activeTab="MERN stack" />}</div>,
  },
];

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("functional patterns");

  useEffect(() => {
    async function loadQuestions(category) {
      let data = await getQuestions(category);
      setQuestions(data);
    }
    loadQuestions(category);
  }, [category]);

  const handleTabSelect = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Tabs tabs={tabs} questions={questions} onSelect={handleTabSelect} />
    </div>
  );
};

export default App;