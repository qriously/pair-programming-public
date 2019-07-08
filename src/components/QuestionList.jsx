import React, { useState } from 'react'
import {QUESTIONS} from "../data/questions";
import {Question} from "./Question";
import '../App.css';

export const QuestionList = () => {

    const [questions, setQuestions] = useState(QUESTIONS);
    const [activeQuestionId, setActiveQuestionId] = useState(null);

    const handleSetActive = (id) => {
        setActiveQuestionId(id);
    };

    const handleAddQuestion = () => {
        // TODO 1. use the defaultQuestion() method to inset a new question
        //  (with a new unique id) into the questions array
        // sample answer
    };

    const handleDeleteQuestion = (id) => {
        // TODO 2. remove a question of a given id from the questions array
    };

    const handleDrop = (dragIndex, hoverIndex) => {
        // TODO 3. move the dragged question to the appropriate position in the questions array
    };

    return (
        <div className={'question-list'}>
            {
                questions.map((question, index) => <Question key={index}
                                                             question={question}
                                                             index={index}
                                                             active={question.id === activeQuestionId}
                                                             deleteQuestion={handleDeleteQuestion}
                                                             setActive={handleSetActive}
                                                             dropQuestion={handleDrop}/>)
            }
            <div className={'add-question'}
                 onClick={handleAddQuestion}>
                <span className={'fas fa-plus'} />
                <span>Add Question</span>
            </div>
        </div>
    )
};