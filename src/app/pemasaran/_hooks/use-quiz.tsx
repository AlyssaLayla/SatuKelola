// hooks/useQuiz.ts
import { useState, useEffect } from 'react';
import { Question, Option } from '@/types/pemasaran.type';
import { marketingQuestions } from '@/data/pemasaran';

export type QuizAnswer = {
  questionId: string;
  selectedOptions: string[];
};

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const currentQuestion = marketingQuestions[currentQuestionIndex];
  const totalQuestions = marketingQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Get current question's answer
  const getCurrentAnswer = (): string[] => {
    const existingAnswer = answers.find(
      answer => answer.questionId === currentQuestion.id
    );
    return existingAnswer ? existingAnswer.selectedOptions : [];
  };

  // Handle answer selection
  const handleAnswerSelect = (optionId: string) => {
    const currentAnswer = getCurrentAnswer();
    let newSelectedOptions: string[];

    if (currentQuestion.type === 'single') {
      newSelectedOptions = [optionId];
    } else {
      // Multiple selection
      if (currentAnswer.includes(optionId)) {
        newSelectedOptions = currentAnswer.filter(id => id !== optionId);
      } else {
        newSelectedOptions = [...currentAnswer, optionId];
      }
    }

    // Update answers
    const newAnswers = answers.filter(
      answer => answer.questionId !== currentQuestion.id
    );
    newAnswers.push({
      questionId: currentQuestion.id,
      selectedOptions: newSelectedOptions
    });
    setAnswers(newAnswers);
  };

  // Navigation functions
  const startQuiz = () => {
    setShowPopup(false);
    setIsStarted(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const completeQuiz = () => {
    setIsCompleted(true);
  };

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    const currentAnswer = getCurrentAnswer();
    return currentAnswer.length > 0;
  };

  // Check if it's the last question
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return {
    // State
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    isStarted,
    isCompleted,
    showPopup,
    
    // Computed
    isLastQuestion,
    isFirstQuestion,
    isCurrentQuestionAnswered: isCurrentQuestionAnswered(),
    currentAnswer: getCurrentAnswer(),
    
    // Actions
    handleAnswerSelect,
    startQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz,
    setShowPopup,
  };
};