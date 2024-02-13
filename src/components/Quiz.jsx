import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz(props) {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback (
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prevState) => [...prevState, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    },[handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return (
        <div id='quiz'>
            {/*the key prop is used to trigger recreation of timer component every time question changes.*/}
            <Question key={activeQuestionIndex}
                      index={activeQuestionIndex}
                      onSelectAnswer={handleSelectAnswer}
                      onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;