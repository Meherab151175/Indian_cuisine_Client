import React from 'react';
import NavBar from '../pages/NavBar/NavBar';
import Footer from '../pages/Footer/Footer';
import Q1 from '../Q1/Q1';
import Q2 from '../Q2/Q2';
import Q3 from '../Q3/Q3';
import Q4 from '../pages/Q4/Q4';

const Blog = () => {
    return (
        <div>
            <NavBar />
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto my-5'>
                <Q1 />
                <Q2 / >
                <Q3 />
                <Q4 />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;