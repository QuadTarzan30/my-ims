// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCODrboc2lRA5uibrml3g6TS9Aa2rUIiMw",
  authDomain: "my-ims-79615.firebaseapp.com",
  projectId: "my-ims-79615",
  storageBucket: "my-ims-79615.appspot.com",
  messagingSenderId: "926813900423",
  appId: "1:926813900423:web:7f213f5c5bbca0600a3222",
  measurementId: "G-EMC83CCBNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);