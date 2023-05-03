import React from 'react';
import './Blog.css'
// import {ReactToPdf} from 'react-to-pdf'

const Blog = () => {
    return (
        <div>
            {/* <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
            </div> */}
            <h1 className='text-5xl text-center p-20 bg-indigo-100 bg-opacity-50 font-bold'>Blog</h1>
            <div className='w-9/12 mx-auto text-xl flex flex-col gap-4 blog-container mt-10'>
                <h2>Tell us the differences between uncontrolled and controlled components</h2>
                <h4><span className='font-bold'>Answer: </span>Controlled components can be controlled by the parent component. It has it&apos;s state. On the other hand uncontrolled component can not be controlled by React, they manage their own state internally</h4>
                <h2>How to validate React props using PropTypes?</h2>
                <h4><span className='font-bold'>Answer: </span>React props can be sent from one component to other and this props can be validated using React PropTypes. This is React internal mechanism. We can validate React props by using this validators: 1. any, 2. bool, 3. number, 4. string, 5. func etc.</h4>
                <h2>Tell us the difference between nodejs and express js</h2>
                <h4><span className='font-bold'>Answer: </span>Express is a minimal and flexible node.js web application. It can be used for building single, multi page and hybrid web applications. On the other hand Node.js is known as &quot;A platform built on Chrome JavaScript runtime for building fast, scalable network applications&quot;</h4>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <h4><span className='font-bold'>Answer: </span>Custom hook is React hook that can be created by us. Custom hooks in React offers reusability. By using custom hooks our code stays cleaner and it also helps to reduce time to write code</h4>
            </div>
        </div>
    );
};

export default Blog;