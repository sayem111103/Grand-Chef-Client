/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "lg:text-lg text-sm font-medium mx-3 text-blue-600" : "lg:text-lg text-sm font-medium mx-3 hover:text-blue-600"}                  >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;