import { useState } from 'react'

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

export function QuizCard({ question, onAnswer }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setHasAnswered(true);
    onAnswer(index === question.correctAnswer);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {question.text}
      </h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={hasAnswered}
            className={`w-full p-3 text-left rounded-lg transition-colors ${
              hasAnswered
                ? index === question.correctAnswer
                  ? 'bg-green-100 dark:bg-green-900'
                  : index === selectedAnswer
                  ? 'bg-red-100 dark:bg-red-900'
                  : 'bg-gray-100 dark:bg-gray-800'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}