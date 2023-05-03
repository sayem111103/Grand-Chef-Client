/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-lg font-medium mx-3 text-blue-600" : "text-lg font-medium mx-3 hover:text-blue-600"}                  >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;