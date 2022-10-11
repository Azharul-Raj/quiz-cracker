import React from 'react';
import img from './asset/heroimg.jpg'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div>
            <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-white m-8 rounded-lg">
              <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                  <div className="max-w-xl mb-6">
                    <div>
                      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Brand new
                      </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      Take A Quick Test,
                      <br className="hidden md:block" />
                      Get The Idea About Your Skill{' '}
                      <span className="inline-block text-deep-purple-accent-400">
                        Don't Be lazy.
                      </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      Testing yourself is really impotent part while you are learning coding,
                      If you take test in daily basis it will lead your skill in the top.And 
                      eventually you'll be a best programmer.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to="/topic/1"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      React Quiz
                    </Link>
                    <Link
                      to="/topic/2"
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500  hover:text-deep-purple-800"
                    >
                      JS Quiz
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                <img
                  src={img}
                  className="object-cover object-top w-full h-full max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
                  alt=""
                />
              </div>
            </div>
        </div>
    );
};

export default Hero;