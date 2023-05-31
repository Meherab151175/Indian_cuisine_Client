import React from 'react';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Q3 = () => {
    const ref = useRef();
    return (
        <div className="print border-2 rounded-lg border-yellow-500 px-5 py-5">
            <div className='sss'>
                <div ref={ref} className="a">
                    <h3 className="mb-4 font-serif font-bold">Q3:Tell us the difference between nodejs and express js.</h3>
                    <p className="mx-3 text-gray-600 font-medium"><strong>Ams:Node.js:</strong><br />
                    Node.js is a runtime environment that allows developers to execute JavaScript code on the server-side. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that enables efficient handling of concurrent requests.
                    Node.js provides a platform to build server-side applications using JavaScript.
                    It offers an extensive set of built-in modules and libraries, allowing developers to handle file system operations, network requests, and other system-level tasks.
                    Node.js can be used to create various types of applications, including web servers, command-line tools, real-time applications, APIs, and more.
                    Node.js is highly scalable and performs well in handling a large number of concurrent connections</p>
                    <p className="mx-3 text-gray-600 font-medium"><strong>Express.js:</strong><br />
                    Express.js is a minimalistic, flexible, and unopinionated web application framework built on top of Node.js. It provides a set of features and abstractions to simplify the development of web applications and APIs.
                    Express.js adds structure and additional functionality to Node.js applications, making it easier to handle routing, middleware, and other common web development tasks.
                    It provides a simple and intuitive API for handling HTTP requests and responses, defining routes, and implementing middleware functions.
                    Express.js allows developers to create RESTful APIs, server-side rendered applications, or even single-page applications using client-side rendering frameworks like React or Angular.</p>
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

export default Q3;