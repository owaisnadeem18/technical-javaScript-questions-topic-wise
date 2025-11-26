// Q1 — Async/Await + Promise + setTimeout Mix (Classic Trap)

// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// async function async1() {
//   console.log("async1 start");
//   await async2(); // clear so far.
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2"); // clear till the call of this one 
// }

// async1();

// new Promise((resolve) => {
//   console.log("promise1");
//   resolve();
// }).then(() => console.log("promise2"));

// console.log("end");

// Output:
// start
// async1 start
// async2
// async1 end
// end

// Q2 — Nested Promises + setTimeout

// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("promise1");
//     return Promise.resolve("promise2").then(res => console.log(res));
//   })
//   .then(() => console.log("promise3"));

// console.log("end");

// Output: 
// start
// end
// promise1
// promise2
// promise3
// timeout

// Q3 — Async/Await with Immediate and Delayed Execution

// async function foo() {
//   console.log("foo start");
//   await bar();
//   console.log("foo end");
// }

// async function bar() {
//   console.log("bar");
//   return Promise.resolve();
// }

// console.log("script start");
// foo();
// console.log("script end");

// Output: 
// script start
// foo start
// bar
// foo end
// script end

// Q4 — Tricky Nested async/await

// async function a() {
//   console.log("a start");
//   await b();
//   console.log("a end");
// }

// async function b() {
//   console.log("b start");
//   await c();
//   console.log("b end");
// }

// async function c() {
//   console.log("c start");
//   return Promise.resolve("c end");
// }

// console.log("script start");
// a();
// console.log("script end");

// Output: 
// script start
// a start
// b start
// c start
// script end
// b end
// a end
// script end 

// Q5 — Microtask/Macrotask Mix

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// queueMicrotask(() => console.log("5"));

// Promise.resolve().then(() => console.log("6"));

// Output: 
// 1
// 4
// 3
// 5
// 6
// 2

// Q6 — Promise Race with setTimeout

Promise.resolve()
  .then(() => console.log("promise1"))
  .then(() => setTimeout(() => console.log("timeout1"), 0))
  .then(() => console.log("promise2"));

setTimeout(() => console.log("timeout2"), 0);

// Output:
// promise1
// timeout1
// promise2
// timeout2