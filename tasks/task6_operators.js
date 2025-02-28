// // TASK : 
// 1. What is the result of 10 + '5'?

let num1=10;
let num2="2"
console.log(num1+num2)//here additionl operator act as combing the number as a string so we get as 102


// 2. What is the value of x after x = 10; x += 5;?
let x=10;
x+=5;
console.log(x);//here it acts as x=x+15 then x value become 15

// 3. What is the result of 10 - null?
 let z=10
console.log(z-null)//here null is consider as 0 so 10-0=10 itslef

// 4. What is the value of x after x = 10; x *= 2;?

let s=10;
result1=s*=2;//multiplication
console.log(result1)//here multiplatcion has been performed

// 5. What is the result of 10 / '2'?
let d=10;
let f="2";
result2=d/f;// here we will qet the quatint
console.log(result2);

// 6. What is the result of 10 % 3?

let p=10
result3=p%3// here we will get remainder
console.log(result3)

// 7. What is the value of x after x = 10; x = x ** 2;?

 let sq=10;
result4=sq**2;
console.log(result4)//here we will get squre of the number

// 8. What is the result of 10 > 5 && 5 < 10?
console.log(10 > 5 && 5 < 10)//here both statements are true we get true
// true

// 9. What is the result of 10 === '10'?
// False
console.log(10==="10")// here we are using statc equal so it will check data type and value so it is false
////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. What is the result of null ?? 'default'?
//zero
// let value = 'Hello, world!';
// let result = value ?? 'default';
// console.log(result); // Output: 'Hello, world!'

let value = null;
let result = value ?? 'default';
console.log(result); // Output: 'default'//according to Nullish Coalescing Operator (??) only checks for null or undefined.It does not treat falsy values like 0, '', or false as invalid.

// let value = undefined;
// let result = value ?? 'fallback';
// console.log(result); // Output: 'fallback'


// console.log("null")
// 11. What is the result of 10 || 'default'?

let v=10;
let h="default"
let res1=null||11;
console.log(res1)
//In JavaScript, any number on the left-hand side of the || operator will return the same number as long as it is truthy. All numbers except 0 are truthy in JavaScript.{A value is truthy if it is not one of the following falsy values:

//     false
//     0 (the number zero)
//     -0 (negative zero)
//     "" (empty string)
//     null
//     undefined
//     NaN (Not-a-Number)
//     Everything else is truthy.}


////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. What is the result of !true?

//false
console.log(!true);//! is make 0 to 1 and 1 to 0

// 13. What is the result of 10 & 5?
console.log(10&5);//it will make binary opertion in b/w and gives the number of corresponding binary value

// 14. What is the result of 10 | 5?
console.log(10|5);//it will make binary opertion in b/w and gives the number of corresponding binary value


// 15. What is the result of 10 ^ 5? 
console.log(10^5);//it will make binary opertion in b/w and gives the number of corresponding binary value


// 1 What is the result of x = 10; y = ++x;? 
// What are the values of x and y?
q=10;
w=++q;//here 1st the value is inc adn assignd to w
console.log(w)
console.log(q)

// 2. What is the result of x = 10; y = x++;? 
e=q++
console.log(e) //here value is assigned to e after that the value is got changed
// console.log(w)
// console.log(q)
// console.log(e)

// 3. What is the result of x = 10; console.log(++x);?
let r = 10;
 console.log(++r);//here value in incread and gives 11

// 4. What is the result of x = 10; console.log(x++);?
let g=10;
console.log(g++)// here just value is assigned

// 5. What is the result of x = 10; y = --x;?
// What are the values of x and y?
let k = 10;
l=--k
 console.log(l);//1st dec and ass
 console.log(k);//here  teh dec value

// 6. What is the result of x = 10; y = x--;? What are the values of x and y?
let t = 10;
u=t--
 console.log(u);//her assigned
 console.log(t)//here assinded value after deccreased


// Ternary Operators:

// 1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? 
//yes
let hh=10;
let yy=hh>5;
console.log(yy?"yes":"no");//here conation is true so 2nd operend will come

// 2. What is the value of y?
//true
console.log(yy);//here is is there the vale is true so

// 3. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';?
// yes
let xx=10;
let yyy=x>5;
console.log(yyy?"yes":x>3?"maybe":"no")
// 4. What is the value of y
// yes
console.log(yyy)//here y has right so true we will get

// Optional Chaining:

// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?
const obj3 = { a: { b: 'c' } }; 
console.log(obj3?.a?.b);//c

// 2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?
const obj1 = { a: { b: 'c' } };
 console.log(obj1?.a?.c);//undefined
// 3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);
const obj2 = { a: { b: 'c' } }; 
console.log(obj2?.b?.c);//undefined
