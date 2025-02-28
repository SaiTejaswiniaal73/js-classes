let student = true; // Check if the person is a student

//gives frontend

let skills = {
  skill1: "html",
  skill2: "css",
  skill3: "bootstrap",
  skill4:"js",
  skill5:"node",
  skill6: "react", 
};

let result_uiux = skills.skill1 && skills.skill2 && skills.skill3;
let result_frontend =
  skills.skill1 &&
  skills.skill2 &&
  skills.skill3 &&
  skills.skill4 &&
  skills.skill6;
let result_backend =
  skills.skill1 &&
  skills.skill2 &&
  skills.skill3 &&
  skills.skill5 &&
  skills.skill6;
let result_fullstack =
  skills.skill1 &&
  skills.skill2 &&
  skills.skill3 &&
  skills.skill4 &&
  skills.skill5 &&
  skills.skill6;
// console.log(skills.skill5)
// console.log(skills.skill5 &&skills.skill6)
// console.log(skills.skill1 &&
//   skills.skill2 &&
//   skills.skill3 &&
//   skills.skill4 &&
//   skills.skill5&&skills.skill6!=true)
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

// give full stack
// let skills = {
//   skill1: "html",
//   skill2: "css"
//   skill3: "bootstrap",
//   skill4: "js",
//   skill5: "node",
//   skill6: "react", // Not present
// };

////Gives  backend

// let skills = {
//     skill1: "html",
//     skill2: "css",
//     skill3: "bootstrap",
//     skill4: "js",
//     skill6: "react", // Not present
//   };

//gives frontend
//   let skills = {
//     skill1: "html",
//     skill2: "css",
//     skill3: "bootstrap",
//     skill5: "node",
//     skill6: "react", // Not present
//   };

//gives UI&UX
//   let skills = {
//     skill1: "html",
//     skill2: "css",
//     skill3: "bootstrap",
//   };

//improve skills

//   let skills = {
//     skill1: "html",
//     skill2: "css",
//     skill6: "react", // Not present
//   };

//ask to login
// let student = false;
//   let skills = {
//     skill1: "html",
//     skill2: "css",

//   };
