// let x=5;
// x=x+5;//x+=5 here both are same here plus isADDITION ASSIGNMENT

// console.log(x)

// let arr=[1,2,3,4,5];
// let sum=arr[0]+arr[arr.length-1]
// console.log(sum)

// let obj=
// {
//     e_id:"1000",
//     e_name:"tej",
//     e_pay:1000,
//     e_tax:100,
// }
// // let gross_pay=obj.e_pay+obj.e_tax;
// // let gross_pay=obj["e_pay"]+obj["e_tax"];

// console.log(gross_pay)

// let a=10;
// let b=3;
// let sub=a-b;
// let div=a/b
// let rem=a%b
// console.log(sub)
// console.log(div)//reminder
// console.log(rem)//ir return quotiet

// let x=5;
// x++;
// console.log(x)

// let x=5;
// x++
// console.log(++x)
// ++x
// console.log(x++)

// let y=10;
// y--;
// console.log(y)
// console.log(y--);
// console.log(y--);

// let a=3;
// let b=5;
// let p=10;
// p+=10;
// console.log(p);

// let c=a*b;
// let d=a**b
// let e=a/b;
// let f=a-b;
// let g=a%b;
// 

// let x1="10";
// let x2="20";
// let x3=20;
// console.log(x1==x2)
// console.log(x2===x3)
// console.log(x1=x2)
// console.log(x3==x2)
// console.log(x3!=x2)

// let x1="hi";
// let y1=+x1;

// console.log(typeof y1)
// console.log(typeof x1)
//  let sr1="hi";
//  let sr2=106;
// console.log(sr1+sr2);


// let namee="tejasiwni";
// let fname="sai";

// console.log(namee)

// let arr=["hi","hello","welcome"];
// let ip="tej"
// console.log(arr[0]+ip,arr[1]+ip,arr[2]+ip);

// let a=45;
// console.log(a);
// console.log(b);
// var b=45;


// Sure! Here’s a simpler explanation:

// In JavaScript:

// 1. **`var` variables are "hoisted"** to the top of the code. This means JavaScript acts as if you declared the variable at the very top, but it doesn’t have a value yet—it starts as `undefined`.

// 2. When you write this code:
//    ```javascript
//    console.log(b);
//    var b = 45;
//    ```
//    JavaScript sees it like this:
//    ```javascript
//    var b; // JavaScript moves the declaration to the top.
//    console.log(b); // b exists but has no value yet, so it's undefined.
//    b = 45; // Now b gets the value 45.
//    ```

// 3. That’s why `console.log(b)` shows `undefined`—the variable exists, but its value hasn’t been set yet.

// 4. If you want `b` to have a value before logging it, make sure you assign the value first, like this:
//    ```javascript
//    var b = 45;
//    console.log(b); // Now it shows 45.
//    ```

//    The behavior you're observing is due to **JavaScript's variable hoisting mechanism**.

// ### Key Points:
// 1. **Hoisting:** 
//    - In JavaScript, variable declarations using `var`, `let`, and `const` are hoisted to the top of their scope. However, only the declarations (not initializations) are hoisted.
//    - For `var`, the variable is hoisted and initialized as `undefined`.
//    - For `let` and `const`, they are hoisted but remain uninitialized in a "temporal dead zone" until their definition is encountered in the code.

// 2. In your code:
//    ```javascript
//    let a = 45;
//    console.log(a); // Prints: 45
   
//    console.log(b); // Prints: undefined
//    var b = 45;
//    ```
//    - When the interpreter encounters `console.log(b)`, the declaration of `b` has been hoisted, but its initialization (`b = 45`) has not yet occurred. Therefore, `b` is `undefined` at that point.

// ### Hoisted version of your code (conceptually):
// ```javascript
// let a; // Declared (hoisted), but in a temporal dead zone.
// var b; // Declared (hoisted) and initialized to undefined.

// a = 45;
// console.log(a); // 45
// console.log(b); // undefined (b is declared but not yet initialized)
// b = 45;
// ```

// ### Solution:
// If you want `b` to be defined before accessing it, ensure that the declaration and initialization happen before the `console.log()` call:
// ```javascript
// let a = 45;
// var b = 45;

// console.log(a); // 45
// console.log(b); // 45
// ```

// Alternatively, avoid `var` and use `let` or `const` for better scoping behavior:
// ```javascript
// let a = 45;
// let b = 45;

// console.log(a); // 45
// console.log(b); // 45
// ```

 topics:
// --------
// forloop

// task:
// -----
// 1.check input string is palindrome or not? using for loop and terinary operator.
// 2.i/p=["one","two","six","one"]---> o/p:n,w,i,n
// 3.i/p=["one","two","three","four"]--->o/p:["eno","owt","eerht","ruof"];
// notes on forloop vs for-in vs for-of