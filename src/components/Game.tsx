import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

interface Problem {
  question: string;
  answer: number;
  options: number[];
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);

  const generateProblem = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;

    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 50) + 25; // Ensure first number is larger
        num2 = Math.floor(Math.random() * num1);
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
    }

    // Generate wrong options that are close to the correct answer
    const options = [answer];
    while (options.length < 4) {
      const offset = Math.floor(Math.random() * 10) - 5;
      const wrongAnswer = answer + offset;
      if (!options.includes(wrongAnswer) && wrongAnswer >= 0) {
        options.push(wrongAnswer);
      }
    }

    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    setProblem({
      question: `${num1} ${operation} ${num2} = ?`,
      answer,
      options: shuffledOptions,
    });
    setFeedback(null);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    if (!problem) return;

    const isCorrect = selectedAnswer === problem.answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setScore(score + 10);
      setStreak(streak + 1);
      setTimeout(generateProblem, 1000);
    } else {
      setStreak(0);
    }
  };

  if (!problem) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-8 w-full max-w-2xl mx-auto">
      <div className="text-white mb-8 text-center">
        <Calculator className="w-12 h-12 mx-auto mb-4 text-blue-400" />
        <h3 className="text-2xl font-bold mb-2">Math Challenge</h3>
        <div className="flex justify-center gap-8 text-lg">
          <p>Score: {score}</p>
          <p>Streak: {streak} 🔥</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 text-center">
        <p className="text-4xl font-bold mb-4 text-gray-800">{problem.question}</p>
        {feedback && (
          <p className={`text-lg font-semibold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback === 'correct' ? '✨ Correct!' : '❌ Try again!'}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`
              p-4 text-xl font-bold rounded-lg transition-all transform hover:scale-105
              ${feedback === null ? 'bg-blue-500 hover:bg-blue-600 text-white' : 
                option === problem.answer && feedback === 'correct' ? 'bg-green-500 text-white' :
                option === problem.answer ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}
            `}
            disabled={feedback !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {feedback === 'incorrect' && (
        <button
          onClick={generateProblem}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try New Problem
        </button>
      )}
    </div>
  );
}