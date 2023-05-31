import React from 'react';
import { Outlet } from 'react-router-dom';

const ChefsLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default ChefsLayout;