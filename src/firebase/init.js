// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqbP_Q6OL3Ejf8wrwcGRRKGOOSfqxgN5E",
  authDomain: "fir-practice-991db.firebaseapp.com",
  projectId: "fir-practice-991db",
  storageBucket: "fir-practice-991db.appspot.com",
  messagingSenderId: "422431872869",
  appId: "1:422431872869:web:16bced14d78b1eb34af38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();