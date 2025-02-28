// using loops and statements
// Print the entered number is even or odd
 let num1=30;
if(num1%2==0)
{
  console.log("even")
}
else
{
  console.log("odd")
}
// print sum of even and odd numbers (addition)

// let arr=[1,2,3,4,5]
// let sum=0;
// for (i=0;i<arr.length;i++)
// {
//   sum=sum+arr[i]
// }
// console.log(sum)

//or

let arr=[1,2,3,4,5]
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

// print product of even and odd numbers (multiplication)
// let arr=[1,2,3,4,5]
// let evenmul=1;
// let oddmul=1;
// for (i=0;i<arr.length;i++)
// {
// if(arr[i]%2==0)
// {
//   evenmul=evenmul*arr[i]
// }
// else
// {
//   oddmul*=arr[i]
// }

// }
// let total_mul=evenmul*oddmul
// console.log(`mul of even numbers:${evenmul}`)
// console.log(`mul of odd numbers:${oddmul}`)
// console.log(`mul of  numbers:${total_mul}`)

// check the even is greater or odd is greater (take the even and odd values from above product or sum answers)
// let arr=[1,2,3,4,5]
// let evensum=0;
// let oddsum=0;
// for (i=0;i<arr.length;i++)
// {
// if(arr[i]%2==0)
// {
//   evensum=evensum+arr[i]
// }
// else
// {
//   oddsum=oddsum+arr[i]
// }

// }
// if(evensum>oddsum)
// {
//   console.log("even sum is more")
// }
// else
// {
//   console.log("odd sum is more")
// }

// console.log(`sum of even numbers:${evensum}`)
// console.log(`sum of odd numbers:${oddsum}`)
