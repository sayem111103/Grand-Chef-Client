/* eslint-disable */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    // login with password and email function 
    const handleEmailPasswordFRegistration = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleEmailPasswordFLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // state observer 
    useEffect(() => {
        const unsubscribs = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoader(false)
        })
        return () => {
            return unsubscribs();
        };
    }, [])

    const value = {
        user,
        auth,
        loader,
        handleEmailPasswordFRegistration,
        handleEmailPasswordFLogin
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;