import React from 'react';

const Blog = () => {
    return (
        <div className='mt-32 md:mx-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white text-black rounded-box">
            <div className="collapse-title text-xl font-medium">
              What is the purpose of   React router?
            </div>
            <div className="collapse-content"> 
                    <p>In general react router is nothing but the navigation menu of website.We can see tons of website in the internet And while we wanna navigate from one page to another page on that moment the entire page get reloaded take time and our user experiences get worse if we brows the website from a poor network location. This is not good user experience at all.
                        Wouldn't it be nice to load the entire website in one time? WOW that would be great.
                        Here is the main concept of react router comes into picture.
                        Let's talk a little about react router below:
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components
              </p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white text-black rounded-box">
            <div className="collapse-title text-xl font-medium">
              How does contextApi works?
            </div>
            <div className="collapse-content"> 
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.

              In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
              </p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white text-black rounded-box">
            <div className="collapse-title text-xl font-medium">
              What is useRef Hook in react?
            </div>
            <div className="collapse-content"> 
            <p>React provides a bunch of hooks that allow you to add features to your components. These hooks make it easier to encapsulate stateful behavior and side effects in your functional components in order to increase readability and to use less code.
            The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef'() . The returned object will persist for the full lifetime of the component.

              The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.
              The hook useRef is one of the important and useful React hooks that you need to know. It allows you to access DOM elements directly, and persist data between renders without causing a component to re-render infinitely when changes.
              </p>
            </div>
            </div>
        </div>
    );
};

export default Blog;
