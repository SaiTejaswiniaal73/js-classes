


let sub = document.forms; // Gets all forms on the page
console.log(sub);

if (sub.length > 0) {
  // Ensure at least one form exists
  sub[0].addEventListener("submit", (event) => {
    // Use sub[0] for the first form
    event.preventDefault();
    let form = event.target;
    console.log(form[1].value, form[0].value, form[2].value, form[3].value);
    let obj = {
      name: form[0].value,
      email: form[1].value,
      password: form[2].value,
      image: form[3].value,
    };
    localStorage.setItem("data", JSON.stringify(obj));
    let data1 = JSON.parse(localStorage.getItem("data"));
    console.log(data1);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h3");
    // let h3 = document.createElement("h4");
    let img = document.createElement("img");
    div.style.width = "fit-content";
    div.style.padding = "10px";
    div.style.border = "2px solid black";
    div.style.backgroundColor = "linear-gradient(to right, #da70ea, #77a5f4);";
    (h1.innerHTML = data1.name),
      (h2.innerHTML = data1.email),
      img.setAttribute("src", data1.image);
    img.style.width = "fit-content";
    div.append(h1, h2, img);
    document.body.append(div);
    document.getElementById("myform").reset();
  });
} else {
  console.error("No forms found in the document.");
}

// const numbers = [12, 55, -2, 90, 33, -77, 18];
// let op1=numbers.filter((x)=>{
//     return x>50
// })
// console.log(op1)

// // let op2=numbers.some((x)=>{
// //     return x<0
// // })
// // console.log(op2)

// let op2=numbers.every((x)=>{
//     return x<0
// })
// console.log(op2)

// let op3=op1.every((x)=>
//     {
//         return x%2==0
//     })
//     console.log(op3)

// // let arr=["red","green","blue","yellow"]
// // let op=arr.sort()
// // console.log(op)
    
// const fruits = ['banana', 'apple', 'grape', 'kiwi', 'orange'];
// let op4=fruits.sort()
// console.log(op4)

// let arr = [1,2,3,4,5];
// let op = arr.reduce((total, value ,index,array) => {
// //   console.log(total,value);
//   return total+value;
//     // return total*value
  
// });
// console.log(op);


// let arr = ['banana', 'apple', 'grape', 'kiwi', 'orange'];
// let op = arr.reduceRight((total, value) => total+" , "+value);
// console.log(op);

// const words = ["hello", "world", "JavaScript", "is", "awesome"];

// const reversedConcatenation = words.reduceRight((acc, word) => acc + " , " + word);

// console.log(reversedConcatenation); 
// // Output: "awesome is JavaScript world hello"

// let obj1={"name":"karthik","city":"hyd"}
// let obj2={"cityy":"hyd"}

// let op=Object.assign(obj1,obj2,{"gender":"male"},{city:"sec"},{"age":21})

// console.log(op)

let colors=[{col1:"red"},{col2:"green"},{col3:"yellow"},{col4:"greay"}]
Object.freeze(colors)
console.log(colors)
colors["col2"]="violet";
console.log(colors)
delete op9.col4;
console.log(colors)