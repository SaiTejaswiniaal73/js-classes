import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

let signupform = document.getElementById("signup");
let signinform = document.getElementById("signin");
let btn = document.getElementById("rdlg");
let backtosignup = document.getElementById("bts");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = e.target[0].value;
  let password = e.target[1].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user) {
        alert("user registered successfully");
        signinform.style.display = "inline-block";
        signupform.style.display = "none";
        btn.style.display = "none";
        backtosignup.style.display = "inline-block";
      }
    })
    .catch((e) => {
      console.log(e), alert("unable to register user");
    });
});

signinform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((x) => {
        console.log(x)
        if(x.user.accessToken){
        alert("login successfull");
        // location.replace("./home.html")

    }})
    .catch((e) => {alert("invalid credentials")});
});

btn.addEventListener("click", () => {
  signinform.style.display = "inline-block";
  signupform.style.display = "none";
  btn.style.display = "none";
  backtosignup.style.display = "inline-block";
});

backtosignup.addEventListener("click", () => {
  signupform.style.display = "inline-block";
  signinform.style.display = "none";
  backtosignup.style.display = "none";
  btn.style.display = "inline-block";
});




import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAqI0RQuQ7DWQfihHa6Azqn6NE61vrZPFw",
  authDomain: "r-2-js.firebaseapp.com",
  projectId: "r-2-js",
  storageBucket: "r-2-js.firebasestorage.app",
  messagingSenderId: "152929090737",
  appId: "1:152929090737:web:7f264b4b37b6fd2302b690",
  measurementId: "G-N4GZWWKTMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // intialisaing firebase authentication

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./auth.js" defer type="module"></script>
</head>
<body>

    <form action="" id="signup">
        <h1>SIGN UP FORM</h1>
        <label for="mail">enter email:</label>
        <input type="email" id="mail"> <br> <br>
        <label for="pswd">enter password:</label>
        <input type="password" id="pswd"><br><br>
        <input type="submit">
    </form> <br>

    <button id="rdlg">already have account</button>

    <form action="" id="signin" style="display: none;">
        <h1>SIGN IN FORM</h1>
        <label for="mail">enter email:</label>
        <input type="email" id="mail"> <br> <br>
        <label for="pswd">enter password:</label>
        <input type="password" id="pswd"><br><br>
        <input type="submit">

    </form>

    <button id="bts" style="display: none;">back to signup</button>


    
</body>
</html>