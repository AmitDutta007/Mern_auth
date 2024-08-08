// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-70606.firebaseapp.com",
  projectId: "mern-auth-70606",
  storageBucket: "mern-auth-70606.appspot.com",
  messagingSenderId: "693132553408",
  appId: "1:693132553408:web:55a1a11662aca087e91125"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);