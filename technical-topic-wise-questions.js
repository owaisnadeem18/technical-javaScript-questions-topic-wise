// technical-topic-wise-questions-JavaScript

// var vs let vs const difference: 

// three differences are as follows:  

// Var:     
// 1. It is function scope.
// 2. Hoisitng with default value as 'undefined'  . You can acess before assigning and declaring , it will return 'undefined'.
// 3. can be redeclare , reassign. 

// let: 
// 1. It is blocked scope.
// 2. Hoisted , but it's value exist in TDZ before interpreter runs the exact line where the variable with 'let' keyword is declared:
// 3. can only be reassign. 

// Const:
// 1. It is blocked scope.
// 2. Hoisted but remains in the TDZ until the declaration is executed. Must be initialized at the time of declaration.
// 3. Cannot reassign nor redeclare.

// ⭐ null
// ⭐ undefined
// ⭐ null vs undefined

// null: It is an assignment value. It can be assigned to a variable as a representation of no value. Type of null is 'object'.

// undefined: It means a variable has been declared but has not yet been assigned a value. Type of undefined is 'undefined'.    

// null vs undefined:

// 1. null is an assignment value, whereas undefined means a variable has been declared but not assigned a value.
// 2. Type of null is 'object', whereas type of undefined is 'undefined'.
// 3. null must be explicitly assigned to a variable, whereas undefined is the default value for uninitialized variables.

// Example:
// let user1;
// console.log(user1); // undefined (JS default, NOT null)

// let user2 = null;
// console.log(user2); // null (explicitly assigned)

// Type of Null :

// console.log(typeof null)
// Output: Object

// NaN 

// Type of NaN :
// console.log(typeof NaN)
// Output: number 

// let greet = "Hello"

// console.log(greet * 45 ) // Output: NaN 

// ⭐ slice() vs splice() — JavaScript Array Methods 

// let arr = [3 , 45 ,24 ,27 , 35 ,13]

// const copy = arr.slice(1,4)

// console.log(arr) // original does not modify 
// console.log(copy) // slice creates a new array , instead of modifying 

// ⭐ Not Defined & Undefined 

// console.log(a) // Not Defined 
// let a

// let b 
// console.log(b)

// ⭐ Hoisting in JavaScript 

// ✅ 1. Function Declarations (Fully Hoisted)

// Functions are hoisted with their complete definition.

// let func = greet

// func()

// function greet() {
//   console.log("Hello");
// }

// ⭐ Closure in JavaScript 

// What is a Closure? 
// A closure is a function that remembers the variables of its outer function even after the outer function has finished executing. 

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// let fn = outer(); // outer function is done but count is remembered

// fn(); // 1
// fn(); // 2
// fn(); // 3

// LEVEL: ADVANCED — Event Loop, Promises, Microtasks/Macrotasks 

// Q1

// console.log("A");

// setTimeout(() => {
//   console.log("B"); // less prior then sync code and promises in JavaScript. 
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C"); // promise have highest priority after sync code 
// });

// console.log("D");

// Output: 
// A 
// D 
// C 
// B 

// Q2

// console.log(1);

// setTimeout(() => console.log(2), 1000);

// Promise.resolve().then(() => console.log(3));

// setTimeout(() => console.log(4), 0);

// console.log(5);

// Output: 
// 1 
// 5 
// 3
// 4
// 2

// Q3

// Promise.resolve().then(() => {
//   console.log("X");
//   setTimeout(() => console.log("Y"), 0);
// });

// console.log("Z");

// Output: 
// Z
// X
// Y

// Q4 — TRICKY

// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// for (let i = 0; i < 5_000_000_000; i++) {}

// console.log("end");

// Output: 
// start 
// end
// timeout

// Reason: 
// JavaScript Runs timeout (macro task) code once after the program execution has been completed

// Q5 — Promise Chain Execution

Promise.resolve(10)
  .then(x => {
    console.log(x);
    return x * 2;
  })
  .then(x => {
    throw new Error("Failed Here");
    return x * 3;
  })
  .then(x => console.log("This will run?", x))
  .catch(err => console.log("Caught:", err.message))
  .then(() => console.log("After Catch runs?"));

// Output:
// 10
// Caught: Failed Here
// After Catch runs?