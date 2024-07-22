// var name  = `dr`;
// var age  = `21`;
// console.log(`name is ${name} and age is ${age}`);

// var multi =`dr
// is
// the 
// boy`;
// console.log(multi);

// // let arr = [2,3];
// // let [a,b] = arr;
// // console.log(a,b);

// let {a,b} = {a:1, b:5};
// console.log(a,b);

// let arr = [1,2,3,4,5];
// let newarr = [...arr, 6,7,8];
// console.log(newarr);

// function sumAll(...numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }

// // Example usage
// console.log(sumAll(1, 2, 3)); // Output: 6
// console.log(sumAll(4, 5, 6, 7)); // Output: 22
// console.log(sumAll(10)); // Output: 10
// console.log(sumAll()); // Output: 0

// function mul(num , y = 1){
//     return num*y;
// }

// let num = 5
// console.log(mul(num));

let title = "The Success";
let author = "DR";
let year = 2025;

let book = {
    title,
    author,
    year
};

console.log(book);

let prop1 = "name";
let prop2 = "age";
let prop3 = "job";

let person = {
    [prop1]: "Alice",
    [prop2]: 30,
    [prop3]: "Engineer"
};

// Log the person object
console.log(person); 
