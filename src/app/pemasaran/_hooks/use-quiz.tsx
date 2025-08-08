import { useState, useEffect } from "react";
import { Question, Option } from "@/types/pemasaran.type";
import { marketingQuestions } from "@/data/pemasaran";

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

  const getCurrentAnswer = (): string[] => {
    const existingAnswer = answers.find(
      (answer) => answer.questionId === currentQuestion.id
    );
    return existingAnswer ? existingAnswer.selectedOptions : [];
  };

  const handleAnswerSelect = (optionId: string) => {
    const currentAnswer = getCurrentAnswer();
    let newSelectedOptions: string[];

    if (currentQuestion.type === "single") {
      newSelectedOptions = [optionId];
    } else {
      if (currentAnswer.includes(optionId)) {
        newSelectedOptions = currentAnswer.filter((id) => id !== optionId);
      } else {
        newSelectedOptions = [...currentAnswer, optionId];
      }
    }

    const newAnswers = answers.filter(
      (answer) => answer.questionId !== currentQuestion.id
    );
    newAnswers.push({
      questionId: currentQuestion.id,
      selectedOptions: newSelectedOptions,
    });
    setAnswers(newAnswers);
  };

  const startQuiz = () => {
    setShowPopup(false);
    setIsStarted(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const completeQuiz = () => {
    setIsCompleted(true);
  };

  const isCurrentQuestionAnswered = () => {
    const currentAnswer = getCurrentAnswer();
    return currentAnswer.length > 0;
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    isStarted,
    isCompleted,
    showPopup,

    isLastQuestion,
    isFirstQuestion,
    isCurrentQuestionAnswered: isCurrentQuestionAnswered(),
    currentAnswer: getCurrentAnswer(),

    handleAnswerSelect,
    startQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz,
    setShowPopup,
  };
};
