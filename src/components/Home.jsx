import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';


const Home = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data
    console.log(topics);
    
    return (
        <div>
            
            {
                topics.map(topic => <Topic key={topic.id} topic={ topic} />)
            }
        </div>
    );
};

export default Home;