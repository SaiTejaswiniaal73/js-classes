//scope in js
// var a=2;
// let b=4;
// const c=6;
// //here ab,b,c having golbael scope
// function demo(){
//     console.log(a)
// }
// demo()
// if(true){
//     console.log(b)
// }
// if(true){
//     console.log(c)
// }

// if(true){
//     var a1="i am var";
//     let b1="i am let";
//     const c1="i am const";
//     console.log(c1)
// }

// console.log(a1) var will have gloabal and local scope if we declare in a block
// console.log(c1)//c1 is not defined error here only block scope is ther not gloabel scope
// console.log(b1)//here this are defined inside so we get errot not declared

// // Global scope
// let websiteTitle = "My Awesome Website";

// function showTitle() {
//   console.log(`Welcome to ${websiteTitle}`); // Accessible here
// }

// function updateTitle(newTitle) {
//   websiteTitle = newTitle; // Update global variable
//   console.log(`Website title updated to: ${websiteTitle}`);
// }

// // Usage
// showTitle(); // Output: Welcome to My Awesome Website
// updateTitle("Your Cool Website"); // Output: Website title updated to: Your Cool Website
// console.log(websiteTitle); // Output: Your Cool Website

let original_name="allampally"
function full_name_before_marriage(){
    console.log(`samyuktha ${original_name} `)
}
function full_name_after_marriage(sor_name=original_name){
    //   sor_name="sakinala"
    original_name=sor_name
    console.log(` samyuktha ${original_name} `)
}
full_name_after_marriage()
full_name_after_marriage("sakinala")
console.log(original_name)

// let original_name = "allampally";

// function full_name_before_marriage() {
//   console.log(`samyuktha ${original_name}`);
// }

// function full_name_after_marriage(sor_name = original_name) {
//   original_name = sor_name; // Directly update original_name
//   console.log(`samyuktha ${original_name}`);
// }

// // Call the functions
// full_name_before_marriage();            // Output: samyuktha allampally
// full_name_after_marriage();             // Output: samyuktha allampally
// full_name_after_marriage("sakinala");   // Output: samyuktha sakinala
// console.log(original_name);             // Output: sakinala
let errorMessage="EROOR"
function validateUserInput(input) {
    if (input.length < 5) {
      let errorMessage = "Input is too short!";
      console.log(errorMessage); // Accessible only inside this block
    } else if (input.length > 20) {
      let errorMessage = "Input is too long!";
      console.log(errorMessage); // Accessible only inside this block
    } else {
      console.log("Input is valid!"); // No block-scoped variable here
    }
    // console.log(errorMessage); // Error: errorMessage is not defined
  }
  validateUserInput("Hi"); // Output: Input is too short!
  validateUserInput("This is a valid input"); // Output: Input is valid!
  validateUserInput("Thi"); // Output: Input is valid!