// let str="hello welcome"
// console.log(str.length)
// console.log(str.charAt(7))
// console.log(str.charAt(-7))//returns nothing
// let test=str[-2]//give sunderfined
// console.log(test)
// console.log(str.at(-7))//return character from right to left in neagtive index also
// console.log(str.slice(0,4))
// console.log(str.slice(-9,-4))
// console.log(str.charCodeAt(7))
// console.log(str.substring(6,13))
// console.log(str.substring(6))
// console.log(str.substring(-4))//return enter string beacue -4 is 0 here
// console.log(str.substring(-13,10))//negetive and treat as zero
// console.log(str.substr(3,6))
// let str1="hello WoRLD"
// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())

// let a="html"
// let b="css"
// let c="js"
// let result=b.concat(a,c)
// console.log(result)

// let result1=b.concat(a,c,"hello","hi")
// console.log(result1)

// let t=" trim kno   w  "
// console.log(t.length)
// let t1=t.trim()//return new string by removing empty spaces at starting and ending
// console.log(t1.length)
// let t2=t.trimStart()
// console.log(t2.length)
// let t3=t.trimEnd()
// console.log(t3.length)

// let ex="javascript"
// let ex1=ex.padStart(22,"hi")
// let ex2=ex.padEnd(15,"hi")
// console.log(ex1)
// console.log(ex2)
 
// let str="hello  ";
// console.log(str.repeat(3))
// console.log(str.replace("hello  ","  hi  "))


// let str="javascript"
// let str2=str.substring(2,8)
// let str1=str.substr(4)
// console.log(str1)
// console.log(str2)
// console.log(str.toUpperCase)

// let a="html"
// let b="css"
// let c="js"
// let result=b.concat(a,c)
// console.log(result)

// let result1=b.concat(a,c,"hello","hi")
// console.log(result1)


// let t=" trim know"
// console.log(t.length)
// let t1=t.trim()//return new string by removing empty spaces at starting and ending
// console.log(t1.length)
// let t2=t.trimStart()
// console.log(t2.length)
// let t3=t.trimEnd()
// console.log(t3.length)

// let str1=str.replace("frontend","fullstack")
// console.log(str1)
// let stru="Frontend developer will works on frontend"
// let str11=stru.replace(/frontend/ig,"backend")
// console.log(str11)

// let ex="javascript"
// let ex1=ex.padStart(22,"hi")
// console.log(ex1)

// let strr="hello welocome ypu"
// let op1=str.match("hello","welcome")
// console.log(op1)
// let op=strr.indexOf(/a/i);
// console.log(op)
// let opp=strr.search("a");
// console.log(opp)

//22-1-25

// let word="hi hello"
// let word1=word.includes("k","hi")
// console.log(word1)

//all strings

// <!-- string methods -->
let names="saitejasiwni"
let son_name="allampally"
let full_name= names+" "+son_name
console.log(full_name.charCodeAt(1))
console.log(full_name.concat(1,10))
console.log(full_name.padStart(30,"hi"))

// // js strings methods

// //declarations
// let singl_quote='hello string'
// let double_quote="hello one double"
// //concating
// let mix=singl_quote+" "+double_quote
// console.log(mix)
// let one_mix=singl_quote.concat(",","singl_quote",singl_quote,"hello",mix)
// console.log(one_mix)
// //length
// let find_length="sai teja swini"
// console.log(find_length.length)


// //accession characters using index

// // let alphabets="abcdef ghijk lmnopqr stuvw xyz"
// // for(i=0;i<=30;i++)
// // {
// //   console.log(alphabets[i])
// // }

// //accession characters using chat at


// // for(i=0;i<=30;i++)
// // {
// //   console.log(alphabets.charAt(i))
// // }
// let alphabets="abcdef ghijk lmnopqr stuvw xyz A-z"
// console.log(alphabets.charAt(4))
// console.log(alphabets[3])
// //accession characters charcode at
// console.log(alphabets.charCodeAt(4))

// console.log(alphabets.at(4))

// let slice_check=alphabets.slice(0,7)
// console.log(slice_check)
// let slice_check1=alphabets.substring(0,7)
// console.log(slice_check1)

// //cases upper and lower 

// // let alphabets="abcdef ghijk lmnopqr stuvw xyz A-z"
// console.log(alphabets.toUpperCase())
// console.log(alphabets.toLowerCase())


// //padding

// var add="1234"
// console.log(add.padStart(10,"o"))
// console.log(add.padEnd(10,"o"))


// //triming
// let name="       Allampally SAI tEJA sWINI Gupta     "
// console.log(name.trim())
// console.log(name.trimStart())
// console.log(name.trimEnd())


// //repeat and replace
//  let ryme="jhon jhoni yes papa jhoni no papa jhoni yes papa"
//  console.log(ryme.repeat(3))
//  console.log(ryme.replace("yes papa","no pappa"))
//   console.log(ryme.replaceAll("yes papa","no pappa"))
  
// //STING SPLITS
// let veg="bens,ladies, finger,brinjial"
// console.log(veg.split(","))

// string search methods:

// //index
// string=" hey o words owl orange ox omygod"
// console.log(string.indexOf("o"))
// console.log(string.lastIndexOf("o"))
// let str="javascript";
// let op1=str.search("p")
// console.log(op1)
// let exam= "hello world"
// console.log(exam.search("wor"))
// console.log(exam.match(/wrd/i))
// let str="javascript";
// let op1=str.search(/A/i)

// // here second arguement will be not consider where it can be consider in indexof method
// // here we can make search as caseinsensitive by adding //i flag where it cannot works in indexof

// console.log(op1)
// function stringConversion(str) {
//   let str1 = "";
//   for (i = 0; i < str.length; i++) {
//     // iterating every character in the string
//     if (str[i] == str[i].toUpperCase()) {
//       // checking each character is in uppercase or not

//       str1 += str[i].toLowerCase(); 
//       // if in uppercase, convert to lowercase and then concats to new string
//     } else {
//       str1 += str[i].toUpperCase(); 
//       // else, convert to uppercase and then concats to new string.
//     }
//   }
//   return str1;
// }


// // let op = stringConversion("hieKLklLoeLJPKL");
// // let op1 = stringConversion("justinTIMEcoMPILer");
// // console.log(op);
// // console.log(op1);

//strin start,end adn width

// let str="hello here  start end width"
// console.log(str.startsWith("hi"))
// console.log(str.endsWith("hello"))
// console.log(str.endsWith("width"))
// console.log(`teja ${str}  okay `)

