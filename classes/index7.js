// let arr=[1,2,3,4,5];
// console.log(arr[9]??"okay no number");
// let data1=[
//     {1,2,3,4},{1,2,{3,4,{5,6}}},{7,8}
// ]
//ternary operator

//terinary operator syntax:


// let isLoggedIn = true; // Change this to false to test "please login"
// let role = "admin"; // Change to "customer" or other values for testing

// // Ternary operator logic
// const message = !isLoggedIn 
//   ? "Please login" 
//   : role === "admin" 
//   ? "Welcome to admin" 
//   : role === "customer" 
//   ? "Welcome to customer" 
//   : "Role not recognized";

// // Output the result
// let is_user_login=true;
// let role_user=admin;

// let user_login=!is_user_login?"please login user"
//     :role_user=="admin"?"welcome admim"
//     :role_user="customer"?"welcome to shop"
//     :"role not recoginzed"
// console.log(user_login);

let userLogin=true;
let user_Role="cus";
userLogin?user_Role=="cus"
?console.log("welcome to customer"):console.log("welcome to admin"):console.log("please login");

// let userLogin = "true";
// let user = "admin";
// user?
// console.log("login sucessfully")
// :console.log("please login")

// userLogin
//   ? user == "customer"
//     ? console.log("wtc")
//     : console.log("wta")
//   : console.log("please login");

let foodperon="true";
let foodType="veg";
let foodItem="chicken";
foodperon
    ?foodType=="veg"
        ?foodItem=="panner"
            ?console.log("panner")
            :console.log("gobi")
        :foodItem=="chicken"
            ?console.log("chicken")
            :console.log("mutton")
:console.log("please login")

let student = true; // Check if the person is a student
let skill1 = "html";
let skill2 = "css";
let skill3 = "bootstrap";
let skill4 = "js";
let skill5 = "node";
let skill6 = "react";
let result_uiux = skill1 && skill2 && skill3;
let result_frontend = skill1 && skill2 && skill3 && skill4 && skill6;
let result_backend = skill1 && skill2 && skill3 && skill4 && skill5;
let result_fullstack = skill1 && skill2 && skill3 && skill4 && skill5 && skill6;
student
  ? result_fullstack
    ? console.log("Fullstack Developer")
    : result_backend
    ? console.log("Backend Developer")
    : result_frontend
    ? console.log("Frontend Developer")
    : result_uiux
    ? console.log("UI/UX Designer")
    : console.log("Please improve your skills")
  : console.log("Please login");
// student
//     ? result_uiux
//         ? console.log("UI/UX Designer")
//         : result_frontend
//             ? console.log("Frontend Developer")
//             : result_backend
//                 ? console.log("Backend Developer")
//                 : result_fullstack
//                     ? console.log("Fullstack Developer")
//                     : console.log("Please improve your skills")
//     : console.log("Please login");

// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = "bootstrap";
// let skill4 = "js";
// let skill5 = "node";
// let skill6 = false;

// Nullish coalescing operator with proper grouping
// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = "bootstrap";
// let skill4 = false;
// let skill5 = false;
// let skill6 = false;

// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = "bootstrap";
// let skill4 = "js";
// let skill5 = "node";
// let skill6 = "react";

// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = "bootstrap";
// let skill4 = "js";
// let skill5 = false;
// let skill6 = "react";

// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = "bootstrap";
// let skill4 = false;
// let skill5 = "node";
// let skill6 = "react";

// let student = true; // Check if the person is a student
// let skill1 = "html";
// let skill2 = "css";
// let skill3 = false;
// let skill4 = false;
// let skill5 = false;
// let skill6 = false;


// let result_uiux = (skill1 ?? false) && (skill2 ?? false) && (skill3 ?? false);
// let result_frontend = (skill1 ?? false) && (skill2 ?? false) && (skill3 ?? false) && (skill4 ?? false) && (skill6 ?? false);
// let result_backend = (skill1 ?? false) && (skill2 ?? false) && (skill3 ?? false) && (skill4 ?? false) && (skill5 ?? false);
// let result_fullstack = (skill1 ?? false) && (skill2 ?? false) && (skill3 ?? false) && (skill4 ?? false) && (skill5 ?? false) && (skill6 ?? false);




// student
//   ? result_fullstack
//     ? console.log("Fullstack Developer")
//     : result_backend
//     ? console.log("Backend Developer")
//     : result_frontend
//     ? console.log("Frontend Developer")
//     : result_uiux
//     ? console.log("UI/UX Designer")
//     : console.log("Please improve your skills")
//   : console.log("Please login");



