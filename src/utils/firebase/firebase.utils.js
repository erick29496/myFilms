import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsaalbKoPIexOcmLSuXkmFs9HkJ8HZQhM",
  authDomain: "my-films-ceb78.firebaseapp.com",
  projectId: "my-films-ceb78",
  storageBucket: "my-films-ceb78.appspot.com",
  messagingSenderId: "651325581361",
  appId: "1:651325581361:web:4f23fd2a07138abfc60d10"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: "select_account"});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };