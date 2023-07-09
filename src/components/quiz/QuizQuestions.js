import React, { useState } from "react";

import { quizQuestions } from "@/constans/quizQuestions";

import styles from "@/styles/styles";

const QuizQuestions = ({ translate }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quizQuestions;
  const {
    question,
    translateQuestion,
    answers,
    translateAnswers,
    correctAnswer,
    translateCorrectAnswer,
  } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === translateCorrectAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <section className="min-h-screen">
      <div className="w-[90%] mx-auto uppercase text-[#d66382] font-semibold text-center pt-4 pb-6">
        <h1 className="text-lg lg:text-2xl">Quiz</h1>
        <h2 className="pt-2 lg:text-xl">
          {translate("Question")}: {activeQuestion + 1} /{questions.length}
        </h2>
      </div>

      {/* question box */}
      <div>
        {!showResult ? (
          <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-gray-400 rounded-md py-4 px-2">
            <h3 className="w-[90%] mx-auto font-medium pt-4 pb-2">
              {translate(questions[activeQuestion].translateQuestion)}
            </h3>
            {translateAnswers.map((translateAnswer, idx) => (
              <p
                key={idx}
                onClick={() => onAnswerSelected(translateAnswer, idx)}
                className={
                  selectedAnswerIndex === idx
                    ? "w-[90%] mx-auto cursor-pointer bg-[#d66382] rounded-sm my-4"
                    : "w-[90%] mx-auto cursor-pointer bg-gray-100 rounded-sm my-4"
                }
              >
                <span className="py-4 px-6">{translate(translateAnswer)}</span>
              </p>
            ))}
            {checked ? (
              <div className="w-[80%] mx-auto flex items-center justify-center">
                <button
                  onClick={nextQuestion}
                  className={`${styles.linkStyle} rounded-md w-[100%] my-6`}
                >
                  {activeQuestion === question.length - 1
                    ? translate("Finish")
                    : translate("Next")}
                </button>
              </div>
            ) : (
              <div className="w-[80%] mx-auto flex items-center justify-center">
                <button
                  onClick={nextQuestion}
                  disabled
                  className={`${styles.linkStyle} bg-[#f7bbcb] border-[#f7bbcb] w-[100%] my-6`}
                >
                  {" "}
                  {activeQuestion === question.length - 1
                    ? translate("Finish")
                    : translate("Next")}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-gray-400 rounded-md py-4 px-2">
            <h3 className="font-bold text-lg py-2 px-4 uppercase">
              {translate("Results")}
            </h3>
            <h3 className="font-semibold text-lg py-2 px-4 uppercase">
              {translate("Overall")}: {(result.score / 25) * 100}%
            </h3>
            <p className="py-2 px-4">
              {translate("Total questions")}: <span>{questions.length}</span>
            </p>
            <p className="py-2 px-4">
              {translate("Total score")}: <span>{result.score}</span>{" "}
              {translate("points")}
            </p>
            <p className="py-2 px-4">
              {translate("Correct answers")}:{" "}
              <span>{result.correctAnswers}</span>
            </p>
            <p className="py-2 px-4">
              {translate("Wrong answers")}: <span>{result.wrongAnswers}</span>
            </p>
            <div className="w-[80%] mx-auto flex items-center justify-center py-4">
              <button
                onClick={() => window.location.reload()}
                className={styles.linkStyle}
              >
                {translate("Restart")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizQuestions;
