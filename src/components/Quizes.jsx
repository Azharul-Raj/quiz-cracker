import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Quizes = () => {
    const quizData = useLoaderData()
    const quizName = quizData.data.name
    const quizDetails = quizData.data.questions
    
    // const correctAns=
    return (
        <div>
            <div className="text-center">
                <h2 className='text-4xl font-bold'>Test Your { quizName} Skill</h2>
            </div>
            {
                quizDetails.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
            }
        </div>
    );
};

export default Quizes;