/* eslint-disable */
import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const user = null;
    const auth = getAuth(app);
    const value = {
        user,
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;