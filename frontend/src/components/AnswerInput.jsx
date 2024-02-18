import { useState } from "react";
import './AnswerInput.css';

export default function AnswerInput(props) {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    props.onClick(inputValue);
  };

  return (
    <>
      <textarea id="InputOfAnswer" type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>submit answer</button>
    </>
  );
}