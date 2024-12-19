
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5NCwNtC5jnQ2FTiGZn2Q3XoWKx4XQ96I",
  authDomain: "university-managment-sys-3d822.firebaseapp.com",
  projectId: "university-managment-sys-3d822",
  storageBucket: "university-managment-sys-3d822.appspot.com",
  messagingSenderId: "779102528178",
  appId: "1:779102528178:web:574abe95fe3e96a1bc1fab",
  measurementId: "G-VPSNEVXCT8",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const GoogleProvider=new GoogleAuthProvider();

