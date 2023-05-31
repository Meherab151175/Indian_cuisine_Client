import React from 'react';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Q2 = () => {
    const ref = useRef();
    return (
        <div className="print border-2 rounded-lg border-yellow-500 px-5 py-5">
            <div className='sss'>
                <div ref={ref} className="a">
                    <h3 className="mb-4 font-serif font-bold">Q1:How to validate React props using PropTypes</h3>
                    <p className="mx-3 text-gray-600 font-medium">Ams:React's PropTypes library allows you to validate the props passed to a component, ensuring that they meet the expected types and shapes. By performing prop validation, you can catch potential errors early in development and provide clear documentation for the component's expected inputs.<br />

                    To use PropTypes:<br />

                    1.Install the prop-types package if needed: npm install prop-types.<br />

                    2.Import PropTypes into your component file: import PropTypes from 'prop-types'.<br />

                    3.Define the prop types for your component using the propTypes static property. Inside propTypes, specify the expected types and shapes for each prop.<br />

                    4.Use validators such as PropTypes.string, PropTypes.number, PropTypes.arrayOf, or PropTypes.shape to define the prop's type and structure.<br />

                    5.Add .isRequired to make a prop mandatory.</p>
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

export default Q2;