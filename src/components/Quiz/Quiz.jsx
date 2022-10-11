import React from 'react';
import Option from './Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const Quiz = ({ quiz,idx }) => {
    const { question, options, correctAnswer } = quiz
    

    const showCorrectAns = (answer) => {
        if (answer===correctAnswer) {
            Swal.fire(
                'Good job!',
                'You clicked the Right Answer!',
                'success'
              )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'YOU HAVE SELECTED THE WRONG ANSWER!',
                
              })
        }
        
    }
    const answer = () => {
        Swal.fire(
            'Correct Answer is!',
            `${correctAnswer}`,
            // 'You clicked the Right Answer!',
            // 'success'
          )
    }
    
    return (
        <div className='shadow-lg mb-4 bg-white'>
            <div className=" text-black p-4 my-10 flex justify-between">
                <h2 className='text-2xl font-semibold'><span className='mr-3'>{ idx+1}.</span>{question} ?</h2>
                <div className="">
                    <button onClick={answer} className='text-2xl'><FontAwesomeIcon icon={faEye}/></button>
                </div>
            </div>
            <div className="grid grid-cols-1 ml-4 md:grid-cols-2 md:gap-5">
            {
                    options.map((option, idx) => <Option key={idx} option={option} idx={idx} showCorrectAns={ showCorrectAns} />)
            }
            </div>
        </div>
    );
};

export default Quiz;