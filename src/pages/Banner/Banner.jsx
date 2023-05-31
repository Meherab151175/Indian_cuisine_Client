import React from 'react';
import banner from '../../assets/img/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
            <div className='w-full h-screen bg relative'>
                <div className='absolute top-[40%] left-20 '>
                    <i className='text-4xl text-white pb-6 block'>Welcome</i>
                    <h3 className='text-3xl font-bold text-white'>The Indian traditional food</h3>
                </div>
                
            </div>
    );
};

export default Banner;