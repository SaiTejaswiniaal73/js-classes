// let arr=[1,2,3,4,5];
// console.log(arr);

// [a,b,c,d,e]=arr
// console.log(a)


// [a, b,...c] = arr;

// console.log(c);

let obj=   
 {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

// const{userId,id,info}=obj
// console.log(obj)

// const{a,b,c}=obj
// console.log(obj)

const{userId,id,...info}=obj
console.log(info)