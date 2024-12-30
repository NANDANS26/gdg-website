import { useState } from 'react'
import { QuizCard } from './QuizCard'

const questions = [
  {
    id: '1',
    text: 'What does GDG stand for?',
    options: [
      'Google Developer Groups',
      'Global Developer Guild',
      'General Development Group',
      'Graduate Developer Group',
    ],
    correctAnswer: 0,
  },
  {
    id: '2',
    text: 'Which of these is a Google Cloud Platform service?',
    options: [
      'Azure Functions',
      'Lambda',
      'Cloud Run',
      'EC2',
    ],
    correctAnswer: 2,
  },
]

export function TechQuiz() {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Test Your Knowledge
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Current Score: {score}/{questions.length}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {questions.map((question) => (
            <QuizCard
              key={question.id}
              question={question}
              onAnswer={handleAnswer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}