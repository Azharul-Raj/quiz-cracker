import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';

const Statistics = () => {
    const mainData = useLoaderData()
    const data=mainData.data
    return (
        <div className='bg-white'>
            <Chart data={ data} />
        </div>
    );
};

export default Statistics;