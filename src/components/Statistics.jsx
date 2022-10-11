import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import Chart from './Chart/Chart';

const Statistics = () => {
    const mainData = useLoaderData()
    const data=mainData.data


    return (
        <div className='bg-white '>
            <div className="md:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className='text-xs md:text-sm lg:text-base' dataKey="name" fill='#ffffff' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" stackId="a" fill="#8884d8" />
          
                    </BarChart>
        </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Statistics;