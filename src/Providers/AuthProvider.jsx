import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user ,name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        googleSignIn,
        gitHubSignIn,
        createUser,
        updateUserProfile,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;