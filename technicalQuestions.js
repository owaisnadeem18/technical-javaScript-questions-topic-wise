// Examples for Practice 

// Example 1: var hoisting 

// console.log(a); // undefined
// var a = 10;

// {
//     var x = 10;
//     let y = 20;
// }

// console.log(x); // 10
// console.log(y); // not defined (Reference Error)

// --------------------------------- 

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// output: 
// 3 
// 3 
// 3 