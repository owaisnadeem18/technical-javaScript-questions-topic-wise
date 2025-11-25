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

let arr = [3 , 45 ,24 ,27 , 35 ,13]

const copy = arr.slice(1,4)

console.log(arr) // original does not modify 
console.log(copy) // slice creates a new array , instead of modifying 

