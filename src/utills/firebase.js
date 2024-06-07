// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKkttY1Usm1CXFGVy0OwDklgDuDfjkq3s",
  authDomain: "netflixgptproject-736c3.firebaseapp.com",
  projectId: "netflixgptproject-736c3",
  storageBucket: "netflixgptproject-736c3.appspot.com",
  messagingSenderId: "694032907006",
  appId: "1:694032907006:web:89c2ca64a810b7a531c3af",
  measurementId: "G-ZTZNMKPNSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();