"use client";

import React from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useQuiz } from "../_hooks/use-quiz";

const ProgressBar = ({ progress }: { progress: number }) => (
  <div
    style={{
      width: "100%",
      backgroundColor: "#e5e7eb",
      borderRadius: "9999px",
      height: "8px",
      marginBottom: "2rem",
    }}
    className="progress-bar"
  >
    <div
      style={{
        background: "linear-gradient(to right, #FDD741, #D3B336)",
        height: "8px",
        borderRadius: "20px",
        transition: "width 0.5s ease-out",
        width: `${progress}%`,
      }}
    />
  </div>
);

const QuizOption = ({
  option,
  isSelected,
  onClick,
  type,
}: {
  option: any;
  isSelected: boolean;
  onClick: () => void;
  type: "single" | "multiple";
}) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      padding: "1.25rem 1.5rem",
      borderRadius: "10px",
      border: `3px solid ${isSelected ? "#FDD741" : "#e5e7eb"}`,
      backgroundColor: isSelected ? "#fff" : "#fff",
      textAlign: "left",
      transition: "all 0.3s ease",
      boxShadow: isSelected
        ? "0 4px 10px -5px rgba(253, 215, 65, 0.25)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      cursor: "pointer",
      marginBottom: "1.25rem",
      display: "block",
    }}
    className="quiz-option"
    onMouseEnter={(e) => {
      if (!isSelected) {
        e.currentTarget.style.borderColor = "#FEE480";
        e.currentTarget.style.backgroundColor = "#FEF2C0";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 15px -3px rgba(0, 0, 0, 0.1)";
      }
    }}
    onMouseLeave={(e) => {
      if (!isSelected) {
        e.currentTarget.style.borderColor = "#e5e7eb";
        e.currentTarget.style.backgroundColor = "#fff";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
      }
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="quiz-option-content">
      {type === "single" ? (
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: `3px solid ${isSelected ? "#FDD741" : "#d1d5db"}`,
            backgroundColor: isSelected ? "#FDD741" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
          className="quiz-radio"
        >
          {isSelected && (
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      ) : (
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "0.5rem",
            border: `3px solid ${isSelected ? "#FDD741" : "#d1d5db"}`,
            backgroundColor: isSelected ? "#FDD741" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
          className="quiz-checkbox"
        >
          {isSelected && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          )}
        </div>
      )}

      <span
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.6",
          color: isSelected ? "#111827" : "#374151",
          fontWeight: isSelected ? "600" : "500",
          transition: "color 0.3s ease",
        }}
        className="quiz-option-text"
      >
        {option.text}
      </span>
    </div>
  </button>
);

const StartOverlay = ({
  onStart,
  onClose,
}: {
  onStart: () => void;
  onClose: () => void;
}) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      borderRadius: "2rem",
      zIndex: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
    className="start-overlay"
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "1.5rem",
        padding: "2rem",
        maxWidth: "400px",
        width: "100%",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "relative",
        border: "1px solid #f3f4f6",
      }}
      className="start-overlay-content"
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "none",
          border: "none",
          color: "#9ca3af",
          cursor: "pointer",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#6b7280")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
      >
        <X size={20} />
      </button>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "4rem",
            height: "4rem",
            background: "#151A27",
            borderRadius: "50%",
            margin: "0 auto 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            ?
          </span>
        </div>

        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "1rem",
            lineHeight: "1.4",
          }}
          className="start-overlay-title"
        >
          Strategi Pemasaran Tepat untuk Bisnis Anda
        </h3>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "2rem",
            lineHeight: "1.6",
            fontSize: "0.95rem",
          }}
          className="start-overlay-description"
        >
          Cukup 5 menit untuk merancang strategi pemasaran ideal, mendapatkan
          ide konten, dan langsung memiliki rencana aksi!
        </p>

        <button
          onClick={onStart}
          style={{
            width: "100%",
            background: "#FDD741",
            color: "black",
            fontWeight: "600",
            padding: "0.875rem 2rem",
            borderRadius: "20px",
            borderColor: "#FEE480",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          className="start-button"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#D3B336";
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow =
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FDD741";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
          }}
        >
          Mulai Sekarang
        </button>
      </div>
    </div>
  </div>
);

const QuizSection = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    isStarted,
    isCompleted,
    showPopup,
    isLastQuestion,
    isFirstQuestion,
    isCurrentQuestionAnswered,
    currentAnswer,
    handleAnswerSelect,
    startQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz,
    setShowPopup,
  } = useQuiz();

  if (isCompleted) {
    return (
      <section style={{ padding: "3rem 0" }} className="quiz-completed">
        <div
          style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem" }}
          className="quiz-completed-container"
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              padding: "3rem",
              textAlign: "center",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
            className="quiz-completed-card"
          >
            <div
              style={{
                width: "4rem",
                height: "4rem",
                background: "#27AE60",
                borderRadius: "50%",
                margin: "0 auto 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: "1.5rem" }}>✓</span>
            </div>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1rem",
              }}
              className="quiz-completed-title"
            >
              Selesai!
            </h3>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
              className="quiz-completed-description"
            >
              Rekomendasi pemasaran personal Anda telah siap. <br />
              Temukan cara terbaik untuk meningkatkan penjualan.
            </p>

            <button
              onClick={() => {
                console.log("Redirecting to result page...");
                window.location.href = "/pemasaran/hasil";
              }}
              style={{
                background: "#27AE60",
                color: "#ffffff",
                fontWeight: "bold",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="quiz-result-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E8449";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#27AE60";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Lihat Hasil
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "3rem 0" }} className="quiz-section">
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }} className="quiz-container">
        {isStarted && <ProgressBar progress={progress} />}

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "3rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            position: "relative",
            minHeight: "500px",
          }}
          className="quiz-card"
        >
          {!isStarted && showPopup && (
            <StartOverlay
              onStart={startQuiz}
              onClose={() => setShowPopup(false)}
            />
          )}

          {isStarted && (
            <>
              <div style={{ marginBottom: "2rem" }} className="quiz-header">
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    marginBottom: "1rem",
                  }}
                  className="quiz-counter"
                >
                  Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
                </div>

                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "1rem",
                    lineHeight: "1.3",
                  }}
                  className="quiz-question-title"
                >
                  {currentQuestion.title}
                </h2>

                {currentQuestion.description && (
                  <p style={{ color: "#6b7280", fontSize: "1.125rem" }} className="quiz-question-description">
                    {currentQuestion.description}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: "2rem" }} className="quiz-options">
                {currentQuestion.options.map((option) => (
                  <QuizOption
                    key={option.id}
                    option={option}
                    isSelected={currentAnswer.includes(option.id)}
                    onClick={() => handleAnswerSelect(option.id)}
                    type={currentQuestion.type}
                  />
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
                className="quiz-navigation"
              >
                <button
                  onClick={goToPreviousQuestion}
                  disabled={isFirstQuestion}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "20px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: isFirstQuestion ? "not-allowed" : "pointer",
                    color: isFirstQuestion ? "#9ca3af" : "#374151",
                    backgroundColor: isFirstQuestion
                      ? "transparent"
                      : "transparent",
                  }}
                  className="quiz-back-button"
                  onMouseEnter={(e) => {
                    if (!isFirstQuestion) {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                      e.currentTarget.style.color = "#111827";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isFirstQuestion) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#374151";
                    }
                  }}
                >
                  <ArrowLeft size={20} />
                  <span>Kembali</span>
                </button>

                <div style={{ display: "flex", gap: "1rem" }} className="quiz-action-buttons">
                  {!isLastQuestion ? (
                    <button
                      onClick={goToNextQuestion}
                      disabled={!isCurrentQuestionAnswered}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "1rem 2rem",
                        borderRadius: "20px",
                        fontWeight: "700",
                        transition: "all 0.3s ease",
                        border: "none",
                        cursor: isCurrentQuestionAnswered
                          ? "pointer"
                          : "not-allowed",
                        background: isCurrentQuestionAnswered
                          ? "#20273A"
                          : "#e5e7eb",
                        color: isCurrentQuestionAnswered
                          ? "#ffffff"
                          : "#20273A",
                        boxShadow: isCurrentQuestionAnswered
                          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                          : "none",
                      }}
                      className="quiz-next-button"
                      onMouseEnter={(e) => {
                        if (isCurrentQuestionAnswered) {
                          e.currentTarget.style.background = "#151A27";
                          e.currentTarget.style.transform = "scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isCurrentQuestionAnswered) {
                          e.currentTarget.style.background = "#20273A";
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                    >
                      <span>Selanjutnya</span>
                      <ArrowRight size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={completeQuiz}
                      disabled={!isCurrentQuestionAnswered}
                      style={{
                        padding: "1rem 2rem",
                        borderRadius: "20px",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                        border: "none",
                        cursor: isCurrentQuestionAnswered
                          ? "pointer"
                          : "not-allowed",
                        background: isCurrentQuestionAnswered
                          ? "#27AE60"
                          : "#d1d5db",
                        color: isCurrentQuestionAnswered
                          ? "#ffffff"
                          : "#6b7280",
                        boxShadow: isCurrentQuestionAnswered
                          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                          : "none",
                      }}
                      className="quiz-finish-button"
                      onMouseEnter={(e) => {
                        if (isCurrentQuestionAnswered) {
                          e.currentTarget.style.background = "#1E8449";
                          e.currentTarget.style.transform = "scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isCurrentQuestionAnswered) {
                          e.currentTarget.style.background = "#27AE60";
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                    >
                      Selesai
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Desktop Large (1200px+) */
        @media (min-width: 1200px) {
          .quiz-card {
            padding: 3.5rem !important;
            min-height: 550px !important;
          }
          
          .quiz-question-title {
            font-size: 2rem !important;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) {
          .quiz-container {
            max-width: 52rem !important;
          }
        }

        /* Tablet Landscape (768px - 991px) */
        @media (max-width: 991px) {
          .quiz-section {
            padding: 2.5rem 0 !important;
          }
          
          .quiz-container {
            max-width: 48rem !important;
            padding: 0 1.25rem !important;
          }
          
          .quiz-card {
            padding: 2.5rem !important;
            min-height: 450px !important;
          }
          
          .quiz-question-title {
            font-size: 1.75rem !important;
          }
          
          .quiz-question-description {
            font-size: 1rem !important;
          }
        }

        /* Tablet Portrait (576px - 767px) */
        @media (max-width: 767px) {
          .quiz-section {
            padding: 2rem 0 !important;
          }
          
          .quiz-container {
            padding: 0 1rem !important;
          }
          
          .quiz-card {
            padding: 2rem !important;
            border-radius: 1rem !important;
            min-height: 400px !important;
          }
          
          .progress-bar {
            margin-bottom: 1.5rem !important;
          }
          
          .quiz-header {
            margin-bottom: 1.5rem !important;
          }
          
          .quiz-question-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .quiz-question-description {
            font-size: 0.95rem !important;
          }
          
          .quiz-option {
            padding: 1rem 1.25rem !important;
            margin-bottom: 1rem !important;
          }
          
          .quiz-option-content {
            gap: 1rem !important;
          }
          
          .quiz-radio, .quiz-checkbox {
            width: 24px !important;
            height: 24px !important;
          }
          
          .quiz-option-text {
            font-size: 1rem !important;
          }
          
          .quiz-navigation {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .quiz-action-buttons {
            width: 100% !important;
            justify-content: center !important;
          }
          
          .quiz-next-button, .quiz-finish-button {
            flex: 1 !important;
            max-width: 300px !important;
          }
        }

        /* Mobile Large (481px - 575px) */
        @media (max-width: 575px) {
          .quiz-section {
            padding: 1.5rem 0 !important;
          }
          
          .quiz-container {
            padding: 0 0.75rem !important;
          }
          
          .quiz-card {
            padding: 1.5rem !important;
            min-height: 350px !important;
          }
          
          .quiz-question-title {
            font-size: 1.25rem !important;
          }
          
          .quiz-option {
            padding: 0.875rem 1rem !important;
            margin-bottom: 0.875rem !important;
          }
          
          .quiz-option-text {
            font-size: 0.95rem !important;
          }
          
          .quiz-back-button {
            padding: 0.625rem 1.25rem !important;
          }
          
          .quiz-next-button, .quiz-finish-button {
            padding: 0.875rem 1.5rem !important;
          }
          
          .start-overlay-content {
            padding: 1.5rem !important;
            margin: 0 0.5rem !important;
          }
          
          .start-overlay-title {
            font-size: 1.25rem !important;
          }
          
          .start-overlay-description {
            font-size: 0.875rem !important;
          }
        }

        /* Mobile Small (320px - 480px) */
        @media (max-width: 480px) {
          .quiz-section {
            padding: 1rem 0 !important;
          }
          
          .quiz-container {
            padding: 0 0.5rem !important;
          }
          
          .quiz-card {
            padding: 1.25rem !important;
            min-height: 320px !important;
          }
          
          .quiz-counter {
            font-size: 0.8rem !important;
          }
          
          .quiz-question-title {
            font-size: 1.125rem !important;
            line-height: 1.4 !important;
          }
          
          .quiz-question-description {
            font-size: 0.875rem !important;
          }
          
          .quiz-option {
            padding: 0.75rem 0.875rem !important;
            border-radius: 0.5rem !important;
          }
          
          .quiz-radio, .quiz-checkbox {
            width: 20px !important;
            height: 20px !important;
          }
          
          .quiz-option-text {
            font-size: 0.875rem !important;
          }
          
          .quiz-back-button {
            padding: 0.5rem 1rem !important;
            font-size: 0.875rem !important;
          }
          
          .quiz-next-button, .quiz-finish-button {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.875rem !important;
          }
          
          .start-overlay-content {
            padding: 1.25rem !important;
            border-radius: 1rem !important;
          }
          
          .start-overlay-title {
            font-size: 1.125rem !important;
          }
          
          .start-button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          
          .quiz-completed-container {
            padding: 0 0.75rem !important;
          }
          
          .quiz-completed-card {
            padding: 2rem !important;
          }
          
          .quiz-completed-title {
            font-size: 1.5rem !important;
          }
          
          .quiz-completed-description {
            font-size: 0.875rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .quiz-result-button {
            padding: 0.875rem 1.5rem !important;
          }
        }

        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .quiz-card {
            padding: 1rem !important;
            min-height: 300px !important;
          }
          
          .quiz-question-title {
            font-size: 1rem !important;
          }
          
          .quiz-option {
            padding: 0.625rem 0.75rem !important;
          }
          
          .quiz-option-content {
            gap: 0.75rem !important;
          }
          
          .quiz-option-text {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          
          .start-overlay-content {
            padding: 1rem !important;
            margin: 0 0.25rem !important;
          }
          
          .start-overlay-title {
            font-size: 1rem !important;
          }
          
          .start-overlay-description {
            font-size: 0.8rem !important;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .quiz-section {
            padding: 1rem 0 !important;
          }
          
          .quiz-card {
            min-height: 280px !important;
          }
          
          .progress-bar {
            margin-bottom: 1rem !important;
          }
          
          .quiz-header {
            margin-bottom: 1rem !important;
          }
          
          .quiz-options {
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QuizSection;