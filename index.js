// Advance JavaScript Concepts: 

// 1) Scope, Hoisting, and Closures

// What will be the output of this code and why?

// console.log(a); // undefined 
// var a = 10; 
// console.log(b); // Cannot access 'b' before initialization (Reference Error)
// let b = 20;


// -------------------- 

// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();


// function lexicalScope() {
//     let a = 89 

//     {
//         console.log(a) // will log 89 (Because of the lexical scope)
//     }

//     return a

// }

// console.log(lexicalScope())

// 2️⃣ Closures inside loops

for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Output:

// 3
// 3
// 3

// 2️⃣ Closures inside loops

for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Output: 

// 1
// 2
// 3

// 2) Event Loop and Asynchronous JavaScript

// 1️⃣ Hoisting & TDZ

console.log(a); // Reference Error: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10

// 2️⃣ Event Loop & Microtasks vs Macrotasks



