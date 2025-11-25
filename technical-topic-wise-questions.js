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


console.log(a)

let a = 34 