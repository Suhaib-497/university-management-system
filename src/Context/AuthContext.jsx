import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, GoogleProvider } from "../Config/Firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sendVerification = (email) => {
    return sendEmailVerification(email);
  };
  const signIn = (rememberMe, email, password) => {
    const PersistenceType = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    return setPersistence(auth, PersistenceType).then(() => {
      signInWithEmailAndPassword(auth, email, password);
    });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    return signOut(auth);
  };

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signIn,
    signInWithGoogle,
    signUp,
    forgetPassword,
    logOut,
    sendVerification,
   
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
