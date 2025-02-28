// function grting()
// {
//     console.log("hi i am basic function ")
   
// }
// grting()

// function grting()
// {
//     console.log("hi i am basic function ")
//     return "teja"
//     return "hi"
// }
// // grting()
// console.log(grting())

// console.log(demo())
// function demo(){
//     console.log("demo")
//     return "demo2"
// }

//function with paramentes 1.1named function with parameters

// function addition(x,y){
//     let sum=x+y;
//     console.log(sum)
// }
// addition(3,4)

// function addition(x,y){
//     let sum=x+y
//     return sum
// }
// console.log(addition(5,8))

// function subraction(x,y){
//     const sub=x-y
//     return sub
// }
// console.log(subraction(8,7))
// console.log(sum)
//we are not supposed use then outside the function as encapculation


//function with paramentes 1.1named function without parameters
// function sample(){
//     console.log("hi with no para")
// }
// sample()

//function with paramentes 1.1named function with retrun

// function sample1(){
//     console.log("hi okay")
//     return "hello"
// }
// sample1()
// console.log(sample1())

//function with paramentes 1.1named function with defaul parameters
//defauk functions should me at end

// function def(x,a="default value"){
//     console.log(`${a} and ${x}`)
// }
// def("teja")
// def("teja","12k")

// function bil(iteam1,iteam2,g=5){
//     let total=iteam1+iteam2+g;
//     return total   
// }
// console.log(bil(24,23))

//ananomus function without any name

// var x=function (){
//     return "ananomus"
// }//annamus function(function(){})with varabile function

// console.log(x())

//arrow fucntion
//no need of using function keyword insteed of we use => this one

// var y=()=>{
//     return "hello"
// }
// console.log(y())

// function sample(){}
// var x11=function(){}
// var x2=()=>{}

// var  f_e=function(){}

//arrow function example

// var arr_fun=(a,b)=>{console.log(a+b)}
// arr_fun(3,5)

// var z=function(a,b){
//     console.log(a+b)
// }
// z(3,4)

// var y11=(a,b)=>{
//     console.log(a+b)
// }
// y11(5,5)

// var y11=(a,b)=>{console.log(a+b)}
// y11(5,5)

// var z=()=>{return "hello"}

// console.log(z())

// var z=()=>("heee")
// console.log(z())

// var add=(a,b)=>{return a+b}
// console.log(add(2,3))

// var add=(a,b)=>{return a+b}

// var z=(a,b)=>(a+b)
// var x=s=>s*3
//more para only we have to give brackets
// console.log(z(2,3))
// console.log(x(5))

//call back function(cbf)

// function check_num(x){
//     if(x%2==0){
//         console.log("even")
//       }
//       else{
//         console.log("odd")
//       }

// }
// check_num(123)

//day 2 function
// demo()
// function  demo(){
//     console.log("i am demo")
// }
// var x=function (){
//     console.log("i am var function")
// }
// x()

// var x=function demo (){
//     console.log("i am var function")
// }
// x()

//arrow
//  const y=()=>{
//     console.log("hello")
//     console.log("word")
//  }
//  y()

// function userName(x){
   
//     //calling function
//     console.log("i am vignes")
//     x()
// }
// userName(function skill(){
//     console.log("i am full stack devolper")
// })


// function userName(x,y){
   
//     //calling function
   
//     console.log("i am vignes")
//     x();
//     y();

// }
// userName(
//     function hob(){
//     console.log("i am full stack devolper");
// },
// function skil (){
//     console.log("i am devolper")
// }
// );
//useranma hof
//skil is cbf

// function coders(){
//     console.log("here code")
//     return function(){
//         console.log("10k")
//         return "wonder"
//     }
// }
// let op=(coders())
// // console.log(coders())
// console.log(op())

