// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase-auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD3wCxuR4NkbdGBBdchAvG3oIm51g6tO8",
  authDomain: "react-giphy-app.firebaseapp.com",
  projectId: "react-giphy-app",
  storageBucket: "react-giphy-app.appspot.com",
  messagingSenderId: "347075416410",
  appId: "1:347075416410:web:b82dcaece8db7a43166363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)