import React, { useState } from "react";
import "./Tabs.css";
import CategoryQuestions from "./CategoryQuestions"

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const handleSelect = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header-item ${activeTab === index ? "active" : ""}`}
            onClick={() => {
              setActiveTab(index);
              props.onSelect(tab.label);
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-content-item ${activeTab === index ? "active" : ""}`}
          >
            {tab.content}
            {tab.label !== '' && <CategoryQuestions activeTab={tab.label} questions={props.questions} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
