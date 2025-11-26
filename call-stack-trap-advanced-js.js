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

async function foo() {
  console.log("foo start");
  await bar();
  console.log("foo end");
}

async function bar() {
  console.log("bar");
  return Promise.resolve();
}

console.log("script start");
foo();
console.log("script end");

// Output: 
// script start
// foo start
// bar
// foo end
// script end