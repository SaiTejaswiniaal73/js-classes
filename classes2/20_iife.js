// (function(){}())
//iife cannot be called  because there in not name for it
//we cannot reused
//
// (function(){console.log("hello")}())
// (function(a,b){console.log(a+b)}(4,5))

//asssesing of outer function variabel with inner functions called as closure's
// function outer(){
//     let x=20;
//     function inner(){
//         console.log(x)
//         function innerinner(){
//             console.log(x+3)
//         }
//         innerinner()
//     }
//     inner()

// }
// outer()

// let x=24
// function sample(){
//      x=5
// }
// sample()
// console.log(x)

// function sample(){
//      x=5
// }
// sample()
// console.log(x)


// function sample(){
//     x=y=5
// }
// sample()
// console.log(x)
// console.log(y)


// function sample(){
//      x=y=5
// }
// sample()
// console.log(y)
// console.log(x)
