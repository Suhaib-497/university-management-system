import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, GoogleProvider } from "../Config/Firebase";
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
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate();

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  


  const getUserFromCollection = async (email, collectionName) => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where("email", "==", email)); // Or use UID if you store it
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // User found in this collection
      const doc = querySnapshot.docs[0]; // Get the first document found
      const userData = doc.data();
      return { userData, collectionName };
    }
    return null;
  };

  const checkUserRole = async (email) => {
    try {
      const adminData = await getUserFromCollection(email, "admins");
      if (adminData) {
        
        localStorage.setItem("role","admin")
        console.log("Admin found:", adminData.userData);
        navigate("/");
        return;
      }

      const facultyData = await getUserFromCollection(email, "faculty");
      if (facultyData) {
        
        localStorage.setItem("role","faculty")
        console.log("Faculty found:", facultyData.userData);
        navigate("/faculty-dashboard");
        return;
      }

      const studentData = await getUserFromCollection(email, "students");
      if (studentData) {
       
        localStorage.setItem("role","student")
        
        navigate("/Dashboard");
        return;
      }

      setError("User not found in any collection.");
    } catch (error) {
      console.error("Error checking user role:", error);
     
    }
  };


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
      return signInWithEmailAndPassword(auth, email, password).then((userCtredental)=>{
      const userEmail=userCtredental.user.email;
      checkUserRole(userEmail);}).catch((err)=>{
        console.log("error during sign up")
      })
    });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    localStorage.removeItem("role");
    return signOut(auth);
  };
  const currentRole=localStorage.getItem("role");
  useEffect(() => {
    
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
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
    currentRole,
    
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
