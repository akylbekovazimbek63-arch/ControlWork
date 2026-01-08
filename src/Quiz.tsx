import { useState } from 'react';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onCorrectAnswer: () => void;
}

export default function Quiz({ question, options, correctAnswer, onCorrectAnswer }: QuizProps) {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option: string) => {
    if (option === correctAnswer) {
      setIsCorrect(true);
      onCorrectAnswer();
    } else {
      alert("Неверно!");
    }
  };

  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', borderRadius: '12px', background: '#1a1a1a', color: 'white' }}>
      <h3>{question}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleOptionClick(opt)}
            disabled={isCorrect}
            style={{ padding: '10px', cursor: 'pointer' }}
          >
            {opt}
          </button>
        ))}
      </div>
      {isCorrect && <h2 style={{ color: '#4caf50' }}>ПРАВИЛЬНО!</h2>}
    </div>
  );
}