function leap_nonleap(x){
    if(x%4===0){
        return "true"
    }
    else{
        return "false"
    
    }
 }
console.log(leap_nonleap(2000))
console.log(leap_nonleap(2025))
console.log(leap_nonleap(1900))
console.log(leap_nonleap(2024))
console.log(leap_nonleap(2021))