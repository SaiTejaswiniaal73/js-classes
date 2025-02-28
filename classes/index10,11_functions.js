// function greeting()
// {
// console.log("hello i am function")
// }
// //fucntion invoke/call
// greeting();

// function greeting1()
// {
// console.log("hello");
// return "hi"
// }
// console.log(greeting1())
//function declartion start
// function greeting1()
// {
// console.log("hello");
// return "hi"
// }
//function declartion end
// greeting1()//function invoking

// function greeting1()//function invoking
// {
// console.log("hello");
// // return "hi"
// }
// console.log(greeting1())

// function greeting1()
// {
// console.log("hello");
// return "hi"
// return "okay"
// }
// console.log(greeting1())
// demo();
// console.log(demo())
// function demo()
// {
//     console.log("i am dmeo")
//     return "demo here";
// }


// function add(x,y)
// {
//     let sum=x+y
//     console.log(sum)
//     return sum;

// }
// add(4,6)//function invoking
// console.log(add(4,7))
// console.log(add(4,5))

// function add(x,y)
// {
//     let sum=x+y
//     console.log(sum)
//     return sum;

// }
// add(4,6)//function invoking
// console.log(add(4,7))
// console.log(add(4,5))
// function samplee(a="coders",x)
// {
//     console.log(`${a} from ${x}`)
// }
// samplee("tej")
// function samplee(x,a="coders")
// {
//     console.log(`${a} from ${x}`)
// }
// samplee("tej")

// var x= fucntion(){}//function without name is called as anonamous function
//  console.log(x)
//  var x=function()
//  {
//     return "hi"
//  }
 
// console.log(x)
// var x1=()=>
// {
//     return "hi"

// }
// var f_e=function(){}
// var arr_fee=(a,b)=>{}

///variable function-function sample(){}

// var x11=function(a,b){
//     console.log(a+b)
// };
// x11(4,5);
// var y11=(x,y)=>{
//     console.log(x+y)

// }
// y11(1,2)

// var z=()=>{return "hello"};

// var z=()=>("hello statmwent")


// var z=(a,b)=>{return "hello"};
// var z=(a,10)=>(a+b)
// var z=a=>a*3
// console.log(z)
// function check_even_odd(x)
// {
//     if(x%2==0)
//         {
//             console.log("even")
//         }
//         else
//         {
//             console.log("odd")
//         }
// }
// // let x=125;
// check_even_odd(124)
// console.log(check_even_odd(124))

//functions day 2

// var x=function (){
//     console.log("i am a variable")

// }
// x();
// const y=()=>{
//     console.log("hello")
//     console.log("welcome")
//     console.log("js")
// }
// y()

// console.log(z)
// const z=3

//call back function
// function demo1(x){
//     x()
//     console.log("here it is 1st function")
// }
//hof
// demo1(function demo2(){
//     console.log("here another function")
// })

// function userName(){
//     console.log("i am tejaswini")
// }
// userName()

// function userName(cbf){
//     console.log("i am tejaswini")
//     cbf();
// }
// userName(function skill(){
//     console.log("i am full stack developer")
// })

// it can be return with or without name as skill
// function userName(cbf1,cbf2,a){
//     console.log("i am tejaswini")
//     cbf1();
//     cbf2();
//     a();
//     return "hello"
//     // b();
// }
// console.log(userName(function skill(){
//     console.log("i am full stack developer")
// },function hobbies(){
//     console.log("i travelling")
// },function lanaguege(){
//     console.log("html")
// }))
//userNme is hof
//skill is call back function

// function demo1()
// {
//     return function demo2(){
//         // console.log("hell0")
//         return "hello"
//     }
// }
// console.log(demo1())

// let x=demo1();
// // x()
// console.log(x())

// function coders_1000(){
//     console.log("100 coders");
//     return function(){
//         console.log("27 r batch");
//         return "wonder";
//     }
// }
// let op=coders_1000();
// console.log(op)




















