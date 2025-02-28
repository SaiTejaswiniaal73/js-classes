// let pattern=/hello /
// let pattern1=new RegExp("hello")
// //using a constructor
// let ip="hello"
// let op=pattern.test(ip)
// console.log(op)


// let pattern=/c.t/
// let ip="c1t"
// let op=pattern.test(ip)
// console.log(op)


// let pattern=/^hello/
// let ip="hello teju"//true
// // let ip="he hello teju"//falselet ip="Hello teju"//true
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/^hello/i
// let ip="Hello teju"//true
// // let ip="he hello teju"//false
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/thing$/
// let ip="something"
// let op=pattern.test(ip)
// console.log(op)


// let pattern=/thing$/
// let ip="hello good thing"
// let op=pattern.test(ip)
// console.log(op)

// let pattern=//
// let ip=""
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/cat|cut/
// let ip="okay cat "
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/c.t|c.t/
// let ip="okay cat "
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/colou?r/
// let ip="color"
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/[]/
// let ip=""
// let op=pattern.test(ip)
// console.log(op)


// let pattern=/[abc]/i//in input it containn at lear a,b,c any one
// // let ip="A.c"
// let ip="zxscdngdrfomskdqwiorfusiodhjnkabhjvnsx"
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/[a-z]/
// // let ip="hello okay here the alphabets are present true"
// // let ip="132hi"//it contin alpahbets true
// let ip="123"//it do onot havr alphbets false
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/[a-z]{8,12}/
// let ip="helloe123"
// let op=pattern.test(ip)
// console.log(op)

// let pattern=/^[a-z]{5,12}$/
// let ip="hellop123"
// let op=pattern.test(ip)
// console.log(op)


// let pattern=/^\w{5,12}$/
// let ip="hellookay"
// let op=pattern.test(ip)
// console.log(op)

// let pattern = /^[a-zA-Z][a-zA-Z0-9._]{2,15}$/; // No extra brackets
// let ip = "okay_user";
// let op = pattern.test(ip);
// console.log(op); // Output: true
