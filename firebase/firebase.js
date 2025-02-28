// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZt47GRTL-XU0kqWLslCr6DAIVPFicH5A",
  authDomain: "fir-project-try.firebaseapp.com",
  projectId: "fir-project-try",
  storageBucket: "fir-project-try.firebasestorage.app",
  messagingSenderId: "675417671619",
  appId: "1:675417671619:web:4247bca1f91bd42ad99f76",
  measurementId: "G-RBB5QSDNH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
