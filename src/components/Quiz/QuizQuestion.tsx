import { motion } from 'framer-motion';
import { useState } from 'react';
import { Question } from './types';

interface QuizQuestionProps {
  question: Question;
  index: number;
  onAnswer: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

const questionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      bounce: 0.3
    }
  })
};

export function QuizQuestion({ question, index, onAnswer, isAnswered }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerClick = (answerIndex: number) => {
    if (!isAnswered) {
      setSelectedAnswer(answerIndex);
      onAnswer(answerIndex === question.correctAnswer);
    }
  };

  return (
    <motion.div
      variants={questionVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <motion.h3 
        className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.2 }}
      >
        {index + 1}. {question.text}
      </motion.h3>
      
      <div className="space-y-3">
        {question.options.map((option, optionIndex) => (
          <motion.button
            key={optionIndex}
            onClick={() => handleAnswerClick(optionIndex)}
            disabled={isAnswered}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.3 + optionIndex * 0.1 }}
            whileHover={!isAnswered ? { scale: 1.02 } : {}}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              isAnswered
                ? optionIndex === question.correctAnswer
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                  : optionIndex === selectedAnswer
                  ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                  : 'bg-gray-100 dark:bg-gray-700'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-4 p-4 rounded-lg ${
            selectedAnswer === question.correctAnswer
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-100'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-100'
          }`}
        >
          {selectedAnswer === question.correctAnswer
            ? '✅ Correct!'
            : `❌ Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
        </motion.div>
      )}
    </motion.div>
  );
}