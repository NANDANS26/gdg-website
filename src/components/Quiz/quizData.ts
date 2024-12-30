import { Question } from './types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'What is Firebase?',
    options: [
      'A mobile app development platform',
      'A Backend-as-a-Service (BaaS) platform',
      'A database management system',
      'A cloud storage service',
    ],
    correctAnswer: 1,
    explanation: 'Firebase is a comprehensive Backend-as-a-Service (BaaS) platform that provides various services for app development.',
  },
  {
    id: 2,
    text: 'Which of these is NOT a core Web Vital?',
    options: [
      'First Contentful Paint (FCP)',
      'Largest Contentful Paint (LCP)',
      'First Input Delay (FID)',
      'Cumulative Layout Shift (CLS)',
    ],
    correctAnswer: 0,
    explanation: 'FCP is not a Core Web Vital. The three Core Web Vitals are LCP, FID, and CLS.',
  },
  {
    id: 3,
    text: 'What is the primary purpose of Google Cloud Run?',
    options: [
      'To run virtual machines',
      'To manage databases',
      'To run containerized applications',
      'To store static files',
    ],
    correctAnswer: 2,
    explanation: 'Google Cloud Run is a fully managed platform for running containerized applications.',
  },
  {
    id: 4,
    text: 'Which programming language was developed by Google?',
    options: [
      'Rust',
      'Go',
      'Swift',
      'Ruby',
    ],
    correctAnswer: 1,
    explanation: 'Go (or Golang) was developed by Google engineers Robert Griesemer, Rob Pike, and Ken Thompson.',
  },
  {
    id: 5,
    text: 'What is TensorFlow?',
    options: [
      'A database system',
      'A cloud storage solution',
      'An open-source machine learning framework',
      'A web development framework',
    ],
    correctAnswer: 2,
    explanation: 'TensorFlow is an open-source machine learning framework developed by Google.',
  },
  {
    id: 6,
    text: 'Which Google service provides serverless computing?',
    options: [
      'Google Cloud Functions',
      'Google Cloud Storage',
      'Google Cloud SQL',
      'Google Cloud DNS',
    ],
    correctAnswer: 0,
    explanation: 'Google Cloud Functions is a serverless execution environment for building and connecting cloud services.',
  },
];