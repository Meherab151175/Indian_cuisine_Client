import React from 'react';
import err from '../../assets/img/er.png'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div style={{backgroundImage:`url(${err})`}} className='h-screen w-full bg-no-repeat bg-cover relative'>
            <div className='mx-auto bg-red-700 flex justify-center'>
                <Link  to='/'><button className='absolute bottom-16 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;