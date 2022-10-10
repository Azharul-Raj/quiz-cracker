import React from 'react';

const Option = ({ option,idx,showCorrectAns }) => {
    // console.log(option);
    return (
        <div className='mb-4 text-black'>
            <span><button onClick={()=>showCorrectAns(option)} className='rounded-full font-bold px-[8px] py-[2px] text-sm border border-black border-spacing-1 focus:bg-green-500 focus:border-green-500 focus:text-black md:mr-2'> { idx+1}</button> <span>{ option}</span></span>
        </div>
    );
};

export default Option;