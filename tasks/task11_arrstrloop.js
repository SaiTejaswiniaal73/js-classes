// let main_arr = ["hello", "welcome", "to", "javascript"];
// let rev_arr=[]
// for (i = 0; i < main_arr.length; i++) {
//   let str = "";

//   for (j = main_arr[i].length -1; j>=0; j--)
//      {
//     str += main_arr[i][j];
//     rev_arr[i]=str  
//      }
// }
//  console.log(rev_arr);
//  console.log(main_arr);
// // o/p--->["olleh","welcome","ot","javascript"]

  
// let main_arr = ["hello", "welcome", "to", "javascript"];
// let rev_arr = [];

// for (let i = 0; i < main_arr.length; i++) {
//   let str = "";

//   // Reverse the first word only (i == 0)
//   if (i === 0||i===2) {
//     for (let j = main_arr[i].length - 1; j >= 0; j--) {
//       str += main_arr[i][j];
//     }
//     rev_arr[i] = str; 
//     rev_arr[i] = main_arr[i];
//   }
// }

// console.log(rev_arr);  // Output: ["olleh", "welcome", "ot", "javascript"]
// console.log(main_arr);  // Output: ["hello", "welcome", "to", "javascript"]

let main_arr = ["hello","hi" ,"welcome", "to", "javascript"];
let rev_arr=[]
for( let i=0;i<main_arr.length;i++)
{
    let str="";
    if(i===0||i===3)
    {
        for(let j=main_arr[i].length-1;j>=0;j--)
            {
                str+=main_arr[i][j];
                
            }
        rev_arr[i]=str
     }  
        else
        {
            // rev_arr[i] = str; 
            rev_arr[i] = main_arr[i];

        }           
      }
 console.log(rev_arr)
 console.log(main_arr)

