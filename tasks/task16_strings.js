// const ip = ["html", "css", "JAVASCRIPT", "react", "ANGULAR"];
// const op=new Array(ip.length);
// for (let i=0;i<ip.length;i++){
//     const word=ip[i];
//     if (word===word.toUpperCase()){
//        op[i]=word.toLowerCase();
//     }
//     else if(word===word.toLowerCase())
//     {
//         op[i]=word.toUpperCase();
//     }
//     else{
//         op[i]=word;
//     }

// }

// console.log(op);

const ip = ["html", "css", "JAVASCRIPT", "react", "ANGULAR"];

function transformCase(word) {
  if (word === word.toUpperCase()) {
    return word.toLowerCase();
  } else if (word === word.toLowerCase()) {
    return word.toUpperCase();
  }
  return word;
}

const op = new Array(ip.length);
for (let i = 0; i < ip.length; i++) {
  op[i] = transformCase(ip[i]);
}

console.log(op);
