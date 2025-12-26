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

