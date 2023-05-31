import React from 'react';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Q4 = () => {
    const ref = useRef();
    return (
        <div className="print border-2 rounded-lg border-yellow-500 px-5 py-5">
            <div className='sss'>
                <div ref={ref} className="a">
                    <h3 className="mb-4 font-serif font-bold">Q4:What is a custom hook, and why will you create a custom hook?</h3>
                    <p className="mx-3 text-gray-600 font-medium">Ams:A custom hook is a reusable function in React that allows you to encapsulate logic and stateful behavior, which can then be shared and reused across multiple components. Custom hooks enable you to extract and abstract complex logic into a separate function, promoting code reusability and maintainability. <br />

Here are a few reasons why you might create a custom hook:<br />

<strong>1. Code Reusability:</strong> Custom hooks allow you to extract common functionality and logic from components into a separate function. This makes it easier to reuse that logic across multiple components, reducing code duplication and promoting cleaner, more maintainable code.<br />

<strong>2. Abstraction and Encapsulation:</strong> Custom hooks provide a way to encapsulate complex logic and state management, hiding implementation details and exposing a simple API to the components using the hook. This abstraction makes the components cleaner and easier to understand.<br />

<strong>3. Composing Behavior:</strong> Custom hooks enable you to combine multiple hooks and compose complex behavior by reusing existing hooks. This allows you to build reusable hooks that provide a specific set of functionality that can be easily integrated into different components.</p>
                </div>
            </div>
            <ReactToPrint
        trigger={() => (
          <button className="my-5 mx-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Print
            </span>
          </button>
        )}
        content={() => ref.current}
      />
        </div>
    );
};

export default Q4;