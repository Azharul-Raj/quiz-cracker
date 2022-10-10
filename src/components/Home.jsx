import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import Topic from './Topic';


const Home = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data
    console.log(topics);
    
    return (
        <div>
            <Hero/>
            <div className="topics flex flex-col sm:grid sm:grid-cols-2 items-center md:grid md:grid-cols-4 md:gap-5 md:mx-5">
            {
                topics.map(topic => <Topic key={topic.id} topic={ topic} />)
            }
            </div>
            
        </div>
    );
};

export default Home;