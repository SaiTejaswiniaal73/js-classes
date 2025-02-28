// let arr=[4,31,2,1,5,8]
//  let op=arr.find(function(value,index,array){
//     return value<3
// })
// console.log(op)

// let arr=["hi","java","html","css","mongodb"]
// // let op=arr.indexOf("css")
// let op=arr.find(function(value,index,array){
//     // return  value.length>4
//     return index>2
// })


// let op=arr.find(value,index,array=>return value.length>4)
// let op=arr.find(x=> x.length>3)
// console.log(op)


// let arr=[4,31,2,1,5,8]
// let op=arr.findLast(function(value,index,arr){return value>4})
// let op=arr.map(function(value,index,arr){
//     return value+1})
// let op=arr.map(function(value,index,arr){
//     return value*value})
// let op=arr.map(function(value,index,arr){
//     return value>10})
// let op=arr.map(function(value,index,arr){
//     return index*2})
// console.log(op)

// let arr=["hi","java","html","css","mongodb"]
// let op=arr.map(function(value,index,arr)
//     {console.log(value+"-10kcoders")})

// let arr=["hi","java","html","css","mongodb"]
// let op=arr.forEach(function(value,index,arr)
//     {console.log(value+"-10kcoders")})


//declarign array
// let num=[1,2,3,4]
// let num1=[]
// num1[0]=1
// num1[1]=2
// num1[2]="f"
// num1[3]="g"
// console.log(num1)
// console.log(num)

//accessing arrays

// let fruits=["apple","bannanna","citrusfruits","dragonfruit","elachi","fruits","grapees"]
// console.log(fruits[2])
// console.log(fruits[-2])//udnefined

//length

// console.log(fruits.length)
// console.log(fruits[fruits.length-1])

//index

// let arr=[10,20,30]
// let index=2
// console.log(arr[index])

//es6 Array destructuring

// let fruits = ["apple", "banana", "cherry"];

// let [fruit1, fruit2, fruit3,fruit4] = fruits;
// let [firstFruit, , thirdFruit,fifthFruit] = fruits;

// console.log(firstFruit); // "apple"
// console.log(thirdFruit); // "cherry"
// console.log(fifthFruit)

// console.log(fruit1); // "apple"
// console.log(fruit2); // "banana"
// console.log(fruit3); // "cherry"
// console.log(fruit4)

// 
// let fruits = ["apple", "banana", "citrusfruits", "dragonfruit", "elachi", "fruits", "grapes"];

// let [firstFruit, , thirdFruit, , fifthFruit] = fruits;

// console.log(firstFruit); // "apple"
// console.log(thirdFruit); // "citrusfruits"
// console.log(fifthFruit); // "elachi"

//modfiyin array
// let fruits=["apple","bannanna","elachi","fruits","grapees"]
// fruits[2]="pineapple"
// console.log(fruits)

//array methods

//array lenght

// console.log(fruits.length)
// console.log(fruits[fruits.length-1])

//array to string

// let example=["a","b","c","d","e"]
// console.log(example.toString())

//arr at function
// console.log(example.at(3))
// console.log(example.at(-3))

// arr join

// console.log(fruits.join( " & "))

//arr Pop and push

// let fruits1=["apple","bannanna","elachi","fruits","grapees"]
// console.log(fruits1.pop())
// console.log(fruits1.push("papya"))
// console.log(fruits1)

//shift adn unshft
// console.log(fruits1.shift())
// console.log(fruits1.unshift("zz","yyy"))
// console.log(fruits1)

//delte,copywith,concat
// let fruits2 = ["apple", "banana", "cherry"];
// delete fruits2[1];
// console.log(fruits2);

// let fruits3 = ["apple", "banana"];
// let moreFruits = ["cherry", "dragonfruit"];

// let allFruits = fruits3.concat(moreFruits);

// console.log(allFruits); // ["apple", "banana", "cherry", "dragonfruit"]

// array.copyWithin(target, start, end);
// console.log(fruits.copyWithin(1,0,2))


//slice
// let arr=[1,"hi","two",3,4,"five",6]
// console.log(arr.slice(2,5))
// console.log(arr.slice(-2,-3))
// console.log(arr.slice(-2))

//splice

// let arr=[1,2,3,4,5,]
// let x=arr.splice(2,0,1,2,33,4)
// console.log(arr)

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)


// /search methods

// let arr_exm=[7,6,5,4,32,1,4,3,5,6,6,10,4]
// // console.log(arr_exm.indexOf(4,1))
// // console.log(arr_exm.indexOf(444))
// // console.log(arr_exm.lastIndexOf(6))
// console.log(arr_exm.includes(6))
// console.log(arr_exm.includes(666))

//find

// let arr=[2,4,7,5,4]
// let op=arr.find(function(value,index,array){
//     return value<3
// })
// console.log(op)

// let arr=["hi","java","html","css","mongodb"]
// let op=arr.indexOf("css")
// console.log(op)
// let op=arr.find(function(x,y,z){
//     return x.length>4
// })
// console.log(op)
// let op=arr.find(function(x,y,z){
//     return y>2
// })
// console.log(op)

// let op=arr.find((x,y,z)=>x.length>4)
// let op=arr.find(x=>x.length>3)
// console.log(op)

// let arr=["hi","java","html","css","mongodb"]
// let op=arr.find(function(x,y,z){
//     console.log(x,y,z)
// })
// console.log(op)


//  let arr1=[24,56,89,100,123];

//  let op1=arr1.find(function(value,index,arr){
//     return value%2==0
//  })
//  console.log(op1)

// let arr=[2,4,6,8,9,2,3];

// let op=arr.findLast(function(y,x,arr){return y>5})
// console.log(op);


// let arr=[2,4,6,8,9,2,3];

// let op=arr.findLastIndex(function(y,x,arr){return y>5})
// console.log(op);


//arry of maps

// let arr=[2,4,6,8,9,2,3];
// let op=arr.map(function(value,index,arr){
//     return value
// })

// console.log(op)

// let arr=[2,4,6,8,9,2,3];
// let op=arr.map(function(value,index,arr){
//     return value<5
// })

// console.log(op)


// let arr=[2,4,6,8,9,2,3];
// arr.map(function(value,index,arr){
//     console.log(value+3)
// })

// let arr=[2,4,6,8,9,2,3];
// let op=arr.map(function(value,index,arr){
//     return value*3
// })
// console.log(op)

////for each

// let arr=["hi","hello","welcome","js"];

//  let op=arr.map(function(x,y,z){
//     return x+" 10k"
// })

// console.log(op)


//for each 

// let arr=["hi","hello","welcome","js"];

//  let op=arr.forEach(function(x,y,z){
//     return x+" 10k"
// })

// console.log(op)

// let arr=["hi","hello","welcome","js"];

//  let op=arr.forEach(function(x,y,z){
//     console.log( x+" 10k")
// })

// console.log(op)


// let arr = ["hi", "java", "apple", "orange", "red"];
// let op=arr.map(function(x,y,z){
//     return y+" "+x
//     // console.log(y+" "+x)
// })
// console.log(op)

// let arr = ["hi", "java", "apple", "orange", "red"];
// let op=arr.forEach(function(x,y,z){
//     return y+" "+x
//     // console.log(y+" "+x)
// })
// console.log(op)

// let arr = ["hi", "java", "apple", "orange", "red"];
// let op=arr.map(function(x,y,z){
//     return x[0]
//     // console.log(y+" "+x)
// })
// console.log(op)

// let arr = ["hi", "java", "apple", "orange", "red"];
// let op=arr.map(function(x,y,z){
//     return x[0].toUpperCase()
//     // console.log(y+" "+x)
// })
// console.log(op)


// let arr = ["hi", "java", "apple", "orange", "red"];
// let len=arr.length
// let op=arr.map(function(x,y,z){
//     return x[1].toUpperCase()
//     // console.log(y+" "+x)
// })
// console.log(op)


// let arr = ["hi", "java", "apple", "orange", "red"];
// let len=arr.length
// let op=arr.map(function(x,y,z){
//      return  x.slice(1)+x[x.length-1].toUpperCase()
//      return  x.slice(0,-1) +x[x.length-1].toUpperCase()
    // +
// })
// console.log(op)
//23-1-2025

// let arr=["hi","hello","12"];
// let op=arr.map((value)=>{return "js"});
// console.log(op);

// let arr=["hi","hello","12"];
// let op=arr.map((value)=>{return "js"+value});
// console.log(op);

// let arr=["hi","hello","12"];
// let op=arr.forEach((value)=>{return "js"+value});
// console.log(op);


// let arr=[18,23,45,10,11,29];
// let op=arr.filter((x,y,z)=>{return x>18

// })
// console.log(op);

// let arr=[18,23,45,10,11,29];
// let op=arr.map((x,y,z)=>{return x>18

// })
// console.log(op);


// let arr=[18,23,45,10,11,29];
// let op=arr.forEach((x,y,z)=>{return x>18

// })
// console.log(op);

// let arr=["Java","javascript","Html","react","nodejs"]
// let op=arr.filter((x,y,z)=>{
//     // return x.length>5
//     return x[0]==x[0].toUpperCase()
// })
// console.log(op);

// let arr = [1,2,3,4,5];
// let op = arr.reduce((total, value ,index,array) => {
//   console.log(total,value);
// //   return total+value;
//     return total*value
  
// },10);
// console.log(op);


// let arr = [1,2,3,4,5];
// let op = arr.reduceRight((total, value ,index,array) => {
//   console.log(total,value);
// //   return total+value;
//     return total,value
  
// });
// console.log(op);

// let arr=[24,28,110,23,22,1];
// let op=arr.every((x,y)=>{return x>=18})
// console.log(op)

// let arr=[24,28,110,23,22,19];
// let op=arr.every((x,y)=>{return x>=18})
// console.log(op)

// let arr=[24,28,0,23,22,19];
// let op=arr.some((x,y)=>{return x>=18})
// console.log(op)

// let arr=[112,25,321343,12138,12362]
// let arr=["red","green","blue","yellow"]
// let op=arr.sort()
// console.log(op)

// let arr=["red","green","blue","yellow"]
// let op=arr.sort()
// console.log(op)

// let arr=[112,25,321343,12138,12362]
// let op=arr.sort((a,b)=>{
//     console.log(a,b);
    
//     return a-b
// })
// console.log(op)

// let arr=[112,25,321343,12138,12362]
// let op=arr.reverse((
//     a,b)=>{
//     // console.log(a,b);
    
//     return a-b
// })
// console.log(op)

// let str="hello vignesh"
// // let op=str.slice(-1,str.length)
// let op=str.split("").reverse().join("")
// let opp=op.toString()
// console.log(op)
// console.log(opp)


// let arr=[1,2,3,4,5,5,6,7,8]
// let op=arr.findIndex((x,y)=>{return x>5})
// console.log(op)


// let arr=["hi","hello","12"]
// let op=arr.map(()=>{return "JS"+" hello"})
// console.log(op)

// let arr=["hi","hello","12"]
// let op=arr.forEach((value)=>{return "JS"+" hello"})
// console.log(op)

// let arr=[18,23,45,10,11,29];

// let op=arr.filter((x,y,z)=>{return x>=18})

// console.log(op)

// let arr=["java","javascript","html","react","nodejs"]

// let op=arr.filter((x,y,z)=>{return x.length>=5 })

// console.log(op)

// let arr = ["Java", "java", "Html", "css", "Css", "React", "react"];
// let op = arr.filter((x, y) => {
//   return x[0] == x[0].toUpperCase();
// });
// console.log(op);

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduce((x, y , z) => {
//   console.log(x, y);
//   return "hello";
// });

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduce((x, y , z) => {
// //   console.log(x, y);
//   return x+y;
// },10);
// console.log(op);

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduceRight((x, y , z) => {
//     console.log(x, y);
//   return x*y;
// },10);

// console.log(op);


// let arr=[24,12,1,28,110,23,22,21];

// let op=arr.every((x,y)=>{return x>=18})
// console.log(op)

// // if every element in the array passes the condition of
// //  the test function then returns true otherwise returns false.

// let arr1=[23,12,14,16,17];

// let op1=arr1.some((x,y)=>{return x>18})
// console.log(op1);

// let arr=["blue","amazon","red","green","yello"];

// let op=arr.sort();

// console.log(op)

// let arr = [9, 18, 15, 23, 102, 789, 15, 23];

// let op = arr.sort((a, b) => {
//   return b - a;
// });

// console.log(op);


// let arr=[1,2,3,4,5];
// let op=arr.reverse();
// console.log(op)

let str="hello";

//op="olleh"


let op=str.split("").reverse().join("");
console.log(op);
