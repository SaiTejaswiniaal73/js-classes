
// // 1.check input string is palindrome or not? using for loop and terinary operator.

let user_word=prompt("Hey please give the word to check give is Palindrome or Not")
let word=user_word;
let reverse_word="";
let x=word.length;
for(i=x-1;i>=0;i--)
{
    reverse_word=reverse_word+word[i]  
}
alert(word==reverse_word?"Hey! it is the Palindrome":"sry it is not pailndrome")


// Function to check if a word is a palindrome
const isPalindrome = (word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return word === reverseWord;
};

// Function that uses a callback to check the word
const checkWord = (word, callback) => {
    if (callback(word)) {
        alert("Hey! It is a palindrome");
    } else {
        alert("Sorry, it is not a palindrome");
    }
};

// Main logic
let userWord = prompt("Enter a word to check if it is a palindrome:");
checkWord(userWord, isPalindrome);



//2.i/p=["one","two","six","one"]---> o/p:n,w,i,n

// let input = ["one", "two", "six", "one"];
// let output=[]
// for (let i = 0; i < input.length; i++) 
// {
//     output[i]=input[i][1]
// }
// console.log(output)

// Variable function to extract the second character
const getSecondCharacter = function (word) {
    return word[1];
};

// Main logic
let input = ["one", "two", "six", "one"];
let output = input.map(getSecondCharacter); // Use the variable function in map
console.log(output); // Output: ["n", "w", "i", "n"]


// 3.i/p=["one","two","three","four"]--->o/p:["eno","owt","eerht","ruof"];
let inputt = ["one", "two", "three", "four"];
let outputt = [];

for (let i = 0; i < inputt.length; i++) {
    let reversedWord = "";
    for (let j = inputt[i].length - 1; j >= 0; j--) {
        reversedWord += inputt[i][j];
    }
    outputt[i] = reversedWord;
}

console.log(outputt);
