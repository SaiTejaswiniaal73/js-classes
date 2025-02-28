//question-3
function number(n){
    if( n===0)
    return 1;
   return n*number(n-1)
  
}
console.log(number(5))
console.log(number(4))
console.log(number(0))