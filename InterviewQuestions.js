// Technical and advance questions of JavaScript:

// 1. 
// 🔁 EVENT LOOP / ASYNC (VERY IMPORTANT)

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");                                                                                                                                                  
// });
                                      
// console.log("D");
       
// Output:
// A          
// D
// C  
// B

// swap the values of two numbers without creating a new variable:

// let a = 32 
// let b = 24

// console.log("The value of a & b after swap is => ", a  , b)

// a = b + a 

// b = a - b

// // Now , we wanna swap the value of "a"

// a = a - b 

// console.log("The value of a & b after swap is => ", a  , b)

// ------------------ 

// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve()
// .then(() => {
//   console.log("promise-1");
// })
// .then(() => {
//   console.log("promise-2");
// });

// console.log("end");

// Output: 
// start
// end
// promise-1
// promise-2
// timeout

// ------------------ 

// async function demo() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }

// console.log("C");
// demo();
// console.log("D");

// Output:

// c
// a
// d 
// b 

// ---------------- 

// 🔁 EVENT LOOP / PROMISE / ASYNC 

// console.log("start");

// setTimeout(() => console.log("timeout1"), 0);

// setTimeout(() => console.log("timeout2"), 0);

// Promise.resolve().then(() => console.log("promise1"));

// Promise.resolve().then(() => console.log("promise2"));

// console.log("end");

// Output: 

// start
// end
// promise1
// promise2
// timeout1
// timeout2