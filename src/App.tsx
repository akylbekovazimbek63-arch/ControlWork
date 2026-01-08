import { useState } from 'react';
import Quiz from './Quiz';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questionsData: Question[] = [
  {
    question: "Какой язык программирования используется в React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  {
    question: "Что такое JSX?",
    options: ["Тип данных", "Расширение синтаксиса JS", "База данных", "Стиль оформления"],
    correctAnswer: "Расширение синтаксиса JS"
  },
  {
    question: "Какая функция используется для создания состояния в React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState"
  },
  {
    question: "Как передаются данные от родителя к дочернему компоненту?",
    options: ["Через props", "Через state", "Через link", "Через константы"],
    correctAnswer: "Через props"
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    setShowNext(false);
  };

  const isFinished = currentIndex >= questionsData.length;

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Опрос </h1>
      <hr />
      
      {!isFinished ? (
        <>
          <p>Вопрос {currentIndex + 1} из {questionsData.length}</p>
          <Quiz 
            key={currentIndex}
            question={questionsData[currentIndex].question}
            options={questionsData[currentIndex].options}
            correctAnswer={questionsData[currentIndex].correctAnswer}
            onCorrectAnswer={() => setShowNext(true)}
          />

          {showNext && (
            <button 
              onClick={handleNext}
              style={{
                marginTop: '20px',
                padding: '10px 25px',
                backgroundColor: '#646cff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Следующий вопрос
            </button>
          )}
        </>
      ) : (
        <div style={{ marginTop: '50px' }}>
          <h2>Вы прошли тест!</h2>
          <button onClick={() => setCurrentIndex(0)} style={{ padding: '10px' }}>Начать сначала</button>
        </div>
      )}
    </div>
  );
}