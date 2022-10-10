import React from 'react';

const Topic = ({topic}) => {
    const {id,name,logo,total}=topic
    return (
        <div className='mb-5'>
            <div className="card w-72 h-[350px] bg-slate-300 shadow-xl">
                <figure><img className='h-52 w-60' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-between text-black">
                        <h2 className="card-title">{ name}</h2>
                        <div className="badge badge-outline">{ total} quiz here</div> 
                    </div>
                  <div className="card-actions">
                    <button className="btn btn-primary w-full">TAKE A TEST</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;