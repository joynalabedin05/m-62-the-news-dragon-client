import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
       return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, loggedUser=>{
            console.log('loggedin user on auth state change', loggedUser);
            setUser(loggedUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;