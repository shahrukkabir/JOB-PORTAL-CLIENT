import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './../../Firebase/firebase.init';
import axios from 'axios';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signUpWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("State Captured",currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://job-portal-server-eight-tawny.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("Login", res.data);
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://job-portal-server-eight-tawny.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log("Logout", res.data);
                        setLoading(false);
                    })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signUpWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;