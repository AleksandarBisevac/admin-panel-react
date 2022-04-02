// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Initialize DB from firestore
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID + '.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId:
    '1:' +
    process.env.REACT_APP_FIREBASE_MSG_SENDER_ID +
    ':web:360af276b877ade8ddad0d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
