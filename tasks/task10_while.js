

// Write a code to below questions 


// Write a while and do while loop that prints the numbers from 1 to 5 in the console.

//while

let num1=0
while(num1<5)
{
  num1++
  console.log(num1)
}

//do while

let i=0
do
{
  i++
  console.log(i)
}
while(i<5)



// How would you exit a while loop if a specific condition is met (e.g., when the number equals 3), Write a example code?

let num2=0
while(num2<10)
{
  if(num2==3)
  {
    break//break at 6
  }
  num2++
  console.log(num2)
}

// Write a while and do while loop that prints numbers from 1 to 10, but skips printing the any number from 1 to 10 .
//3a while

let num3=0;
while(num3<10)
{
 
  num3++
  if(num3==8)
  {
    continue
  }

  console.log(num3)
 }

//3b do while

let num4=0;
do {
  num4++

  if(num4==5)//skipping 5
  {
    continue
  }

console.log(num4)
}
while (num4<10)

// Write a while loop that prints all even numbers from 0 to 20.

let even=0;
while(even<=20)
{
    even++
    if(even%2===0)
        {
            console.log(even)
         }       
}

// let even=0;
// while(even<20)
// {
//     even+=2
//     console.log(even)
// }

// Write a code for below questions using Conditional Statements


// 1  Write an if statement in JavaScript that checks if a number is greater than 10, and prints "Number is greater than 10" if true.

let a=11
if(a>10)
{
  console.log("nuumber is greater then true")
}

// 2 Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.

let b=11
if(b%2==0)
{
  console.log("even")
}
else
{
  console.log("odd")
}
//3  Write an if-else if-else ladder that checks the value of a variable grade and prints:
// "A" for grades 90 and above,
// "B" for grades 80 to 89,
// "C" for grades 70 to 79,
// "F" for grades below 70.
let marks=80
if(marks>=90)
{
  console.log("grade A")
}
else if(marks<90&&marks>=80)
{
  console.log("grade B")
}
else if(marks<=79&&marks>=70)
{
  console.log("grade c")
}
else
{
  console.log("grade D")
}

// 4 Write a nested if statement that checks if a number is integer and, if true, checks if it's even or odd.

integer=-50;
if(integer>0)
{
    console.log("integer")
    if(integer%2==0)
    {
        console.log("even and postive")
    }
    else
    {
        console.log("odd and postive")
    }
}
else
{
   console.log("negative")
   if(integer%2==0)
   {
    console.log("EVEN and negative")
   }
   else
   (
    console.log("ODD and negative")
    )
}


// 5 Rewrite the following code using if else statement :
//                 let age = 20;
//                  console.log(age >= 18 ? "Adult" : "Minor");


let age=20
if(age>18)
{
    console.log("child")
}
else
{
    console.log("minor")
}

// 6 Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

ck_num=19
if(ck_num>10&&ck_num<20)
{
    console.log("In Range")
}
else
{
    console.log("Out of Range")
}

// What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently.

diff_num="123"
console.log(typeof diff_num)
if(diff_num==123)//it check only the value
{
    console.log("same")
}
else{
    console.log("diffrent")
}
if(diff_num===123)//it check value and data type
    {
        console.log("same")
    }
    else{
        console.log("diffrent")
    }
    
// Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.

let check_num1 = 19;

if ((check_num1 > 10 && check_num1 < 20) || check_num1 === 30) {
    console.log("condetion met");
} 
// Choose the answers from below questions
// 1.What will the following code output?
// let x = 5;
// while (x <3 ) {
//     console.log(x);
//     x++;
// }

// a) 5
// b) 3
// c) No output
// d) 5, 6, 7... (Infinite loop)

// ans:c

// 2. What will be the result of the following code?
// let y = 0;
// do {
//     console.log(y);
//     y++;
// } while (y < 2);

// a) 0
// b) 0, 1
// c) 1, 2
// d) No output

//ans: b) 0, 1

// 3. Which statement is true about the difference between while and do...while loops?
// a) while loops execute at least once, while do...while loops may not execute at all.
// b) do...while loops execute at least once, while while loops may not execute at all.
// c) Both while and do...while loops execute at least once.
// d) Neither loop guarantees execution of the code block.

// b) do...while loops execute at least once, while while loops may not execute at all.-ans

// 4. What will the following code print?
// let count = 5;
// do {
//     console.log(count);
//     count--;
// } while (count > 0);

// a) 5, 4, 3, 2, 1
// b) 5
// c) 4, 3, 2, 1
// d) No output

//ans- a) 5, 4, 3, 2, 1


// 5. Which of the following loops will execute the code block at least once, even if the condition is initially false?
// a) while loop
// b) do...while loop
// c) for loop
// d) for...in loop

//ans-do-while loop

// 6. What will be the output of the following code?
// let z = 0;
// while (z < 3) {
//     console.log(z);
//     z++;
// }

// ans- a) 1, 2, 3
// b) 0, 1, 2
// c) 0, 1, 2, 3
// d) No output

//ans- a- 1, 2, 3

// 7. What is the primary difference between the while loop and the do...while loop?
// a)  ans-The while loop checks the condition before the code block runs, while the do...while loop checks the condition after.
// b) The do...while loop runs only once, while the while loop runs indefinitely.
// c) The while loop checks the condition after the code block runs, while the do...while loop checks it before.
// d) There is no difference between the two loops.

//. ans-The while loop checks the condition before the code block runs, while the do...while loop checks the condition after.

// 8. What will be the output of this code?
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     if (i === 3) break;
//     i++;
// }

// a) 0, 1, 2, 3, 4
// b) 0, 1, 2, 3
// c) 0, 1, 2
// d) Infinite loop

//ans-b

// 9. Which of the following is the correct usage of a do...while loop?
// a) while (condition) { do { // code } }
// b) do { // code } while (condition);
// c) do while (condition) { // code }
// d) while (condition) do { // code };
 
//ans-b

// 10. What will be the output of the following code?
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 0);

// a) 0
// b) 1
// c) No output
// d) Infinite loop

// ans-a

