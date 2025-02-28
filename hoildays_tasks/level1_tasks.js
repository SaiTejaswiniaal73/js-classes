//question-1

// FizzBuzz with "Hello" and "Javascript"
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Hello Javascript");
    } else if (i % 3 === 0) {
        console.log("Hello");
    } else if (i % 5 === 0) {
        console.log("Javascript");
    } else {
        console.log(i);
    }
    }

//Create a function checkLeapYear that checks whether a year is a leap year or not.
//question-2
function leap_nonleap(x){
    if(x%4===0){
        return "true"
    }
    else{
        return "false"
    
    }
 }
console.log(leap_nonleap(2000))
// console.log(leap_nonleap(2025))
// console.log(leap_nonleap(1900))
// console.log(leap_nonleap(2024))
// console.log(leap_nonleap(2021))

//question-3
function number(n){
    if( n===0)
    return 1;
   return n*number(n-1)
  
}
console.log(number(5))
console.log(number(4))
console.log(number(0))


//question-4


//question-5
//question-6
//question-7
//question-8

//3rd
function number(n){
    if( n===0)
    return 1;
   return n*number(n-1)
  
}
console.log(number(5))
console.log(number(4))
console.log(number(0))

//4th

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even Numbers List</title>
</head>
<body>

<h1>Even Numbers List Generator</h1>

<script>
  
function generateEvenNumbers() {
    let input = prompt("Please enter a positive integer:");

    // Check if the input is valid
    if (input !== null) {
        let num =input;

        // Check if the number is non-negative
        if (num >= 0) {
            let result =[];
            for (let i = 0; i <= num; i++) {
                if (i % 2 === 0) {
                    result += i + ", ";
                }
            }
  
            result = result.slice(0, -2);
            alert("Even numbers: " + result);
        } else {
            alert("Please enter a non-negative integer.");
        }
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

// Call the function when the page loads
generateEvenNumbers();
</script>

</body>
</html>

//5th
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
</head>
<body>

<h1>Multiplication Table Example</h1>

<script>
// Function to print multiplication table using alert
function printMultiplicationTable() {
    let number = prompt("Please enter a number:", "4");
    
    // Check if the input is valid
    if (number !== null && !isNaN(number)) {
        let result = "";
        for (let i = 1; i <= 11; i++) {
            result += `${number} * ${i} = ${number * i}\n`;
        }
        alert(result);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}


// Call the function when the page loads
printMultiplicationTable();
</script>
    
 // 6th user greet
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even Numbers List</title>
</head>
<body>

<h1>Even Numbers List Generator</h1>

<script>
  

function greetUser() {
   
    const name = prompt("Please enter your name:");
    
    
    if (name) {
      
        alert(`"Hello, ${name}!"`);
    } else {
       
       alert("Hello, guest!");
    }
}

greetUser();

</script>

</body>
</html>

//or  
<script>
  

function greetUser() {
   
    const name = prompt("Please enter your name:");
    
    
    if (name) {
      
        console(`"Hello, ${name}!"`);
    } else {
       
       console, guest!");
    }
}

greetUser();

</script>
