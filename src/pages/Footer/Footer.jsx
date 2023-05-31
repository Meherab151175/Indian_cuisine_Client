import React from 'react';
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <div className='bg-black grid grid-cols-3 px-[200px] py-[100px] gap-24 text-white'>
            <div className="intro">
                <div className="logo flex items-center mb-7">
                    <img className="h-10" src={logo} alt="" />
                    <span className=' ml-2'>Great Indian Cuisine</span>
                </div>
                <div className="text"> Indian cuisine has rich flavors, vibrant spices, and diverse range of dishes</div>
            </div>
            <div className="linkk">
                <h3 className='mb-7'>Useful Link</h3>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </div>
            <div className="contact">
                <h3 className='mb-7'>Contact Now</h3>
                <p className='mb-3'>555 4th 5t NW, Washington
                DC 20530, United States</p>
                <p className='mb-3'>+88 07456 000 000</p>
                <p className='mb-3'>info@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;