/* eslint-disable */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    // login with password and email function 
    const handleEmailPasswordFRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleEmailPasswordFLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // state observer 
    useEffect(() => {
        const unsubscribs = onAuthStateChanged(auth, user => {
            setUser(user)
            console.log(user);
        })
        return () => {
            return unsubscribs();
        };
    }, [])

    const value = {
        user,
        auth,
        handleEmailPasswordFRegistration,
        handleEmailPasswordFLogin
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;