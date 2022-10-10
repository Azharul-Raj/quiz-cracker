import React from 'react';
import Option from './Option';

const Quiz = ({ quiz }) => {
    const{question,options}=quiz
    // console.log(quiz);
    return (
        <div className='shadow-lg mb-4 bg-white'>
            <div className=" text-black p-4 my-10">
                <h2 className='text-2xl font-semibold'>{ question} ?</h2>
            </div>
            <div className="grid grid-cols-1 ml-4 md:grid-cols-2 md:gap-5">
            {
                    options.map((option, idx) => <Option key={idx} option={option} idx={ idx} />)
            }
            </div>
        </div>
    );
};

export default Quiz;