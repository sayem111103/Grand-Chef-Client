/* eslint-disable */
import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const user = null;
    const auth = getAuth(app);
    const handleEmailPasswordLogin =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        user,
        auth,
        handleEmailPasswordLogin
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;