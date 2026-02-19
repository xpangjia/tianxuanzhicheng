import { useState, useEffect } from 'react';
import '../styles/question.css';

export default function Question({ question, currentIndex, totalCount, onAnswer }) {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setSelectedId(null);
  }, [currentIndex]);

  const handleSelect = (optionId) => {
    if (selectedId !== null) return;
    setSelectedId(optionId);
    setTimeout(() => {
      onAnswer(question.id, optionId);
    }, 500);
  };

  return (
    <div className="question-container question-enter" key={question.id}>
      <div className="question-number">Q{currentIndex + 1}</div>
      <div className="question-text">{question.text}</div>
      <div className="options-list">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option-card${selectedId === option.id ? ' selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
}
