// Advanced / Mid-Level Event Loop Questions

// 1. Promise + setTimeout mix  
             
// console.log('Start');

// setTimeout(() => console.log('Timeout 1'), 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     setTimeout(() => console.log('Timeout 2'), 0);
// });

// console.log('End');
                                                                                                                                                                                                                                                                                                      
// Output:                
// Start
// End
// Promise 1
// Timeout 1
// Timeout 2

// ------------------------------------------ 

// async function test() {
//     console.log('A'); 
//     await Promise.resolve();
//     console.log('B');
// }

// test();
// console.log('C');

// Output: 
// A 
// C 
// B 


// ------------------------------------------ 

// 2. Multiple microtasks

// Promise.resolve().then(() => console.log('P1'));
// queueMicrotask(() => console.log('QM1'));
// Promise.resolve().then(() => console.log('P2'));

// console.log('Sync');

// Output: 

// Sync
// P1
// QM1
// P2

// ------------------------------------------ 

// 4. Nested setTimeout + async

setTimeout(async () => {
    console.log('T1 start');
    await Promise.resolve();
    console.log('T1 end');
}, 0);

setTimeout(() => console.log('T2'), 0);
console.log('Sync');

// Output:
 
// Sync
// T1 start
// T1 end
// T2        