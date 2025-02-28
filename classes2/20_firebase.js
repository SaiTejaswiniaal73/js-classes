
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDLsxkP07dLw3VZanWqPCjmdAZwGewkRSs",
    authDomain: "k-27ff3.firebaseapp.com",
    projectId: "k-27ff3",
    storageBucket: "k-27ff3.firebasestorage.app",
    messagingSenderId: "2254935812",
    appId: "1:2254935812:web:c196ad093922015f83e251",
    measurementId: "G-657TPWYME2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const getAuth=getAuth(app)//initizinf firebas authenication
  // const analytics = getAnalytics(app);
  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };