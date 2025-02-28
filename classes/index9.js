// if loops

// console.log("statment")
// if(true)
//     console.log("statemnet2"),console.log("statment3")
// let user="admin"
// console.log("welcoem to website")
// if(user=="admin")
// {
//     console.log("u can")
// }
// console.log("u cannot please enetr dashboar")

//if else

// let user="admin"
// console.log("welcoem to website")
// if(user=="admin")
// {
//     console.log("u can")
// }
// else
// {
//     console.log("u cannot please enetr dashboar")
// }
// console.log(" please enter dashboard")
// let isLogin=true;
// let user="admin";
// let gender="male";
// // console.log("welcoem to website")


// if (isLogin)
//     console.log("sucess")
//     if(user=="admin")
//     {
//         if(gender=="male")
        
//             {
//                 console.log("u can enter as male")
//             }
//         else
//         {
//             console.log("u can as female")

//         }
//     }
//     else
//     {
//         console.log("u cannot please enetr dashboar")
//     }
    // console.log(" please enter dashboard")
//else-if ladder
// let budget="10000"

// if(budget>=10000)
// {
//     console.log("go ny flight")
// }
// else if(budget<10000&&budget>=5000)
// {
//    console.log("go by bus") 
// }
// else if(budget<5000&&budget>=3000)
// {
//    console.log("go by train") 
// }
// else if(budget<3000&&budget>=2000)
// {
//    console.log("go by walk") 
// }
// else
// {
//     console.log("sit in home practise js")
// }

//break
// for(i=0;i<5;i++){
//     console.log(i);
//     if(i==5)
//     {
//         break;  
//     }
//     console.log(i*2)
// }

// for (i=1;i<=10;i++)
// {
//     let j=i*2
//     if(j==6)
//     {
//         break
//     }
//     console.log(i)

// }

// let arr=["html","css","js","react","node","my sql","mago","git","bootstrap"]
// for(i=0;i<=arr.length-1;i++)
//     {
//         if (arr.lenght>=4)
//         {
//             console.log(`arr[i]`)

//         }
//     }
// let ip="red"
// switch (ip)
// {
//     case "green":console.log("g");
//     break;
//     case "black":console.log("b");
//     break;
//     case "red":console.log("r");
//     break;
//     case "white":console.log("w")
//     break;
//     default:console.log("no color")
// }

// let ip="red"
// switch (ip)
// {
//     case "red":console.log("r");
//     case "white":console.log("w");
//     case "green":console.log("g");
//     case "black":console.log("b");
//     default:console.log("no color");

// }

// let ip="red"
// switch (ip)
// {
    
//     case "white":console.log("w");
//     case "green":console.log("g");
//     case "black":console.log("b");
//     case "red":console.log("r");
//     default:console.log("no color");

// }
// let num1=125;
// switch(num1)
// {
//     case "100":console.log("entered num is100 ")
//     break;
//     case "125":console.log("entered num is 125")
//     break;
//     case "150":console.log("entered num is 150")
//     break;
//     case 125:console.log("entered num is 125")
//     break;
//     case "250":console.log("entered num is 250")
//     break;
//     default:console.log("num is not avaliable")
// }


// let marks=56
// switch(true)
// {
//  case marks<100&&marks>80:
//     console.log("firstclass");
//     break;
// case marks<80&&marks>60:
//     console.log("secound class");  break;
// case marks<60&&marks>40:
//     console.log("third class");  break;
// default:
//     console.log("fail")
// }

// let arr=[1,4,6];
// arr[24]="hi"
// console.log(arr.length)
// console.log(arr[2])
//console.log(arr.lenght,"array length");

// let arr=[5,6,"hi","35",90]
// arr[arr.length]=6
// console.log(arr)

// let arr=[];
// for(i=20;i<=30;i=i+2)
// {
//     arr[arr.length]=i;
    
// }
// console.log(i)

// let str="java script";
// let arr=[];
// for(i=0;i<=str.length-1;i++)
// {
//     arr[arr.length]=str[i]
//     // console.log(str[i])
// }
// console.log(arr)
// let str1="teja swini"
// let arr1=[];
// for(i=str1.length-1;i>=0;i--)
// {
//     arr1[arr1.length]=str1[i]
// }
// console.log(`${arr1[9]} is at index${9}
//      ${arr1[8]} is at index${8},
//     ${arr1[7]} is at index${7},
//     ${arr1[6]} is at index${6},
//     ${arr1[5]} is at index${5},
//     ${arr1[4]} is at index${4},),
//     ${arr1[3]} is at index${3},
//     ${arr1[2]} is at index${2},
//     ${arr1[1]} is at index${1},
//     ${arr1[0]} is at index${0},`)

// let str1="teja swini"
// let arr1=[];
// for(i=str1.length-1;i>=0;i--)
// {
//     arr1[arr1.length]=`${str1[i]} at index${1}`;
// }
// console.log(arr1)

// let arr3=["hello","hi","welcome","to","java script"];
// for(i=0;i<arr3.length;i++)
// {
//     // console.log(arr3[i])
//     let str="";
//     for(j=arr3[i].length-1;j=1&&3;j--)
//     {
//         str+=arr3[i][j];
       
//     }
//     arr3[i]=str;
    
    
// }
// console.log(arr3)



let arr3 = ["hello", "hi", "welcome", "to", "java script"];
for (let i = 0; i < arr3.length; i++) {
    let str = "";
    for (let j = arr3[i].length - 1; j >= 0; j--) {
        str += arr3[i][j];
    }
    arr3[i] = str; // Update the array with the reversed word
}
console.log(arr3); // Print the updated array

// -------
// 1.i/p--->let arr3 = ["hello", "welcome", "to", "javascript"];
// o/p---> op=["olleh","emoclew","ot","tpircsavaj"]


//2.let i/p = ["hello", "welcome", "to", "javascript"];

// o/p--->["olleh","welcome","ot","javascript"]

// let arr3=["hello","hi","welcome","to","java script"];
// for(i=0;i<arr3.length;i++)
// {
//     // console.log(arr3[i])
//     let str="";
//     for(j=arr3[i].length-1;j=1&&3;j--)
//     {
//         str+=arr3[i][j];
       
//     }
//     arr3[i]=str;
    
    
// }
// for (i = 0; i < main_arr.length; i++) {
//     let str = "";
  
//     for (j = main_arr[i].length - 1; j >= 0; j--)
//          {
//       str += main_arr[i][j];
      
//     }
//     console.log(str);
//   }

let main_arr = ["hello", "welcome", "to", "javascript"];
let rev_arr = [];

for (let i = 0; i < main_arr.length; i++) {
  let str = "";

  // Reverse the first word only (i == 0)
  if (i === 0) {
    for (let j = main_arr[i].length - 1; j >= 0; j--) {
      str += main_arr[i][j];
    }
    rev_arr[i] = str;  // Assign the reversed string for the first element
  } else {
    rev_arr[i] = main_arr[i];  // For other elements, keep them as is
  }
}

console.log(rev_arr);  // Output: ["olleh", "welcome", "ot", "javascript"]
console.log(main_arr);  // Output: ["hello", "welcome", "to", "javascript"]

