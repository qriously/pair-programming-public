import React, { useState } from 'react'
import {QUESTIONS} from "../data/questions";
import {Question} from "./Question";
import '../App.css';
import {defaultQuestion} from "../utils/objects";

export const QuestionList = () => {

    const [questions, setQuestions] = useState(QUESTIONS);
    const [activeQuestionId, setActiveQuestionId] = useState(null);

    const handleAddQuestion = () => {
        // TODO 1.
        // sample answer
        const newQuestions = [...questions];
        newQuestions.push({...defaultQuestion(), id: questions.length + 1});
        setQuestions(newQuestions);
    };

    const handleDeleteQuestion = (id) => {
        // TODO 2.
        // sample answer
        const newQuestions = [...questions];
        newQuestions.splice(questions.map(q => q.id).indexOf(id), 1);
        setQuestions(newQuestions);
    };

    const handleDrop = (dragIndex, hoverIndex) => {
        // TODO 3.
        const dragQuestion = questions[dragIndex];
        const newQuestions = [...questions];
        newQuestions.splice(dragIndex, 1);
        newQuestions.splice(hoverIndex, 0, dragQuestion);
        setQuestions(newQuestions)
    };

    const handleSetActive = (id) => {
        setActiveQuestionId(id);
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