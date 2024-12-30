import { motion } from 'framer-motion';
import { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { quizQuestions } from './quizData';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  },
  exit: { opacity: 0, x: 100 }
};

export default function QuizPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    if (!answeredQuestions.has(questionId)) {
      if (isCorrect) {
        setCurrentScore(prev => prev + 1);
      }
      setAnsweredQuestions(prev => new Set([...prev, questionId]));
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gdg-blue to-gdg-green">
            Tech Knowledge Quiz
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Test your knowledge about Google technologies and development
          </p>
          <div className="mt-4 text-xl font-semibold text-gdg-blue">
            Score: {currentScore}/{quizQuestions.length}
          </div>
        </motion.div>

        <div className="space-y-8">
          {quizQuestions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              index={index}
              onAnswer={(isCorrect) => handleAnswer(question.id, isCorrect)}
              isAnswered={answeredQuestions.has(question.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}