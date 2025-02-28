// --------------------------task-1-------------------------------------------
console.log("hello this is internal styling");
//task-1,2,3 nothing/
//task 4.1
// function createObject() {
//     let name = prompt("Enter the name");
//     let product = prompt("Enter product name");
//     let price = +prompt("Enter price");
//     let day = prompt("Enter Date");
//     let occasion = prompt("Enter occasion");
//     let platform = prompt("Enter platform");
    
//     return {
//         name: name,
//         product: product,
//         price: price,
//         day: day,
//         occasion: occasion,
//         platform: platform
//     };
// }

// function product_information(obj) {
//     alert(
//         `${obj.name} has bought a ${obj.product} which values ${obj.price} on ${obj.day} on the occasion of ${obj.occasion} using ${obj.platform}.`
//     );
// }
// let obj1 = createObject();
// let obj2 = createObject();
// let obj3 = createObject();
// let obj4 = createObject();
// product_information(obj1);
// product_information(obj2);
// product_information(obj3);
// product_information(obj4);


//// task4.2 
// function student_prompt(){
//     let studentname = prompt("Enter student name")
//     let companyname = prompt("Enter company name")
//     let package =+ prompt("Enter your package")
//     let domain = prompt("Enter domain name")
//     let joiningdate =prompt("Enter your joining date")

//     return{
//         name:studentname,
//         company:companyname,
//         salary:package,
//         domain:domain,
//         date:joiningdate
//     }
// }

// function customer_join(obj_student)
// {
//     alert(`${obj_student.name} got placed in ${obj_student.company} company  after learning full stack developement cours in 10 coders as a ${obj_student.domain} with package of ${obj_student.salary} and joining on ${obj_student.date}`)
// }
// let objj1=student_prompt()
// let objj2=student_prompt()
// customer_join(objj1)
// customer_join(objj2)



// --------------------------task-5-------------------------------------------
//5.1
// function even_odd(x){
//     if(x%2==0){
//         return  alert("it is even")
//     }
//     else{
//         return alert("it is odd")
    
//     }
// }
// let ip=prompt("enter number ip")
// console.log(even_odd(ip))

//5.2




// function check_grt_less_equal(){
//         alert("hey give me a number to know given number is even or odd")
//     let number=prompt("Please enter one number");
//     let num=+number;
//     let reminder=num%2;
//     alert(reminder==0?"the given number is even":"the given number is odd")
//     alert("hey know shall we check relation among 2 number(greater,lessoer,equal)")
//     let num1=prompt("enter first number");
//     let num2=prompt("enter secound number");
//     let number1=+num1;
//     let number2=+num2;

//     alert(
//         number1>number2?"1st number is greater then 2nd number":
//         number2>number1?"secound number is greater then 1st number":
//         number2==number1?"equal":"notequal");
//     }
// check_grt_less_equal()
// check_grt_less_equal()


// --------------------------task-6-------------------------------------------
//theory
// --------------------------task-7-------------------------------------------

// function skills_student(){
//   let student = true; // Check if the person is a student

// //gives frontend

// let skills = {
//   skill1: "html",
//   skill2: "css",
//   skill3: "bootstrap",
//   skill4:"js",
//   skill6: "react", 
// };

// let result_uiux = skills.skill1 && skills.skill2 && skills.skill3;
// let result_frontend =
//   skills.skill1 &&
//   skills.skill2 &&
//   skills.skill3 &&
//   skills.skill4 &&
//   skills.skill6;
// let result_backend =
//   skills.skill1 &&
//   skills.skill2 &&
//   skills.skill3 &&
//   skills.skill5 &&
//   skills.skill6;
// let result_fullstack =
//   skills.skill1 &&
//   skills.skill2 &&
//   skills.skill3 &&
//   skills.skill4 &&
//   skills.skill5 &&
//   skills.skill6;
// student
//   ? result_fullstack
//     ? console.log("Fullstack Developer")
//     : result_backend
//     ? console.log("Backend Developer")
//     : result_frontend
//     ? console.log("Frontend Developer")
//     : result_uiux
//     ? console.log("UI/UX Designer")
//     : console.log("Please improve your skills by joining 1000 coders")
//   : console.log("Please login");
//   }
// skills_student()
// --------------------------task-8-------------------------------------------
// function student_id(){
// let student=
// [
//     {id: 1, s_name:"Pavan",city:"hyd"},
//     {id: 2, s_name:"Arjun",city:"sec"},
//     {id:3 ,s_name:"Meena",city:"viz"},
//     {id: 4,s_name:"Rahul",city:"bengauru"},
//     {id: 5,s_name:"Sita",city:"chennai"},
//     {id: 6,s_name:"Vijay",city:"mumbai"},

// ]
// for (i of student)
// {
//     console.log(i.s_name,"from",i.city)
// }
// for (i in student)
// {
//     console.log(student[i].s_name,"from",student[i].city)
// }
// function student_id() {
// Array of student objects

//   student.forEach(student => {
//     console.log(`${student.s_name} from ${student.city}`);
//   });

//   // Using forEach with the index parameter
//   student.forEach((student, index) => {
//     console.log(`${index + 1}: ${student.s_name} from ${student.city}`);
//   });
// }
// student_id()
// student_id();

// }


// student_id();

//keep task 8 as hold

// --------------------------task-9-------------------------------------------
//hold--------
// --------------------------task-10------------------------------------------
// --------------------------task-11-------------------------------------------
// --------------------------task-12-------------------------------------------
//nammed function 1.1-------12

// function check_num(x){
//     if(x%2==0){
//         console.log("even")
//       }
//       else{
//         console.log("odd")
//       }
// }
// check_num(123)
// check_num(12)


//array function 1.3---------------12

// var num = (x) => x % 2 === 0 ? "even" : "odd";
// console.log(num(66)); // Output: even

// var num=(x)=> {
//   if(x % 2 == 0) {
//       console.log("even");
//   } else {
//       console.log("odd");
//   }
// }
// num(65)

//var function 1.2-----------------12

// var y = function(x) {
//   if(x % 2 == 0) {
//       console.log("even");
//   } else {
//       console.log("odd");
//   }
// }
// y(123);
// y(12);

// arr sum of numbe r using function 2.1 using nameing function--------------12

// function arr_sample(){
//   var arr=[1,2,3,4,]
//   let sum=0;
//   for (i=0;i<arr.length;i++)
//   {
//     sum=sum+arr[i]
//   }
//   return sum
// }
// console.log(arr_sample())

//using  varibale

// let a=function(){
//   var arr = [1, 2, 3, 4],5;  
//   let sum=0;
//   for (i=0;i<arr.length;i++)
//   {
//     sum=sum+arr[i]
//   }
//   console.log(sum)
// }
// a()

//using arrow function

// var num=(x)=> {
//   var arr = [1, 2, 3];  
//   let sum=0;
//   for ( let i=0;i<arr.length;i++)
//   {
//     sum+=arr[i]
//   }
//   console.log(sum)
// }
// num()


/////12.2

function check_sum_even_odd(arr){
    let evensum=0;
    let oddsum=0;
    for (i=0;i<arr.length;i++)
    {
    if(arr[i]%2==0)
    {
      evensum=evensum+arr[i]
    }
    else
    {
      oddsum=oddsum+arr[i]
    }
    
    }
    let total_sum=evensum+oddsum
    console.log(`sum of even numbers:${evensum}`)
    console.log(`sum of odd numbers:${oddsum}`)
    console.log(`sum of  numbers:${total_sum}`)
    }
    check_sum_even_odd(arr=[1,2,3,4])


